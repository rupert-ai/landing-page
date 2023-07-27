import React, { FC, useRef, useState, DragEvent, ChangeEvent, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import "./Demo.styles.scss";
import Example from "../../components/Example/Example.component";

import exampleBackgroundA from "../../assets/images/backgrounds/1.png";
import exampleBackgroundB from "../../assets/images/backgrounds/2.png";
import exampleBackgroundC from "../../assets/images/backgrounds/3.png";
import exampleBackgroundD from "../../assets/images/backgrounds/4.png";
import exampleBackgroundE from "../../assets/images/backgrounds/5.png";
import exampleBackgroundF from "../../assets/images/backgrounds/6.png";

import downloadGif from "../../assets/gifs/download.gif";
import Button from "../../components/Button/Button.component";
import LoadingImage from "../../components/LoadingImage/LoadingImage.component";

// Type for require.context
interface RequireContext {
    keys: () => string[];
    (id: string): any;
}

// Helper function to import all images
const importAllImages = (r: RequireContext) => {
    return r.keys().reduce((images: any, path: string) => {
        // Remove the leading './' from the path and split it
        const segments = path.substring(2).split("/");
        let current = images;

        segments.forEach((segment, index) => {
            // Check if this is the last segment (an image file)
            const isLastSegment = index === segments.length - 1;

            if (isLastSegment) {
                // Remove the file extension and assign the image URL
                const segmentWithoutExtension = segment.replace(/\.\w+$/, "");
                current[segmentWithoutExtension] = r(path); // changed this line
            } else {
                // Otherwise, this is a directory - ensure the object exists and move on to the next directory
                current[segment] = current[segment] || {};
                current = current[segment];
            }
        });

        return images;
    }, {});
};

// Use it like this:
const images = importAllImages(require.context("../../assets/images/demo", true, /\.(webp|png|jpe?g|svg)$/));

const Demo: FC = () => {
    gsap.registerPlugin(ScrollToPlugin);
    const [dragging, setDragging] = useState(false);
    const dragCounter = useRef(0);
    const dropRef = useRef<HTMLDivElement | null>(null);

    const [productImageSrc, setproductImageSrc] = useState<string | null>(null);
    const [backgroundImageSrc, setBackgroundImageSrc] = useState<string | null>(null);

    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [selectedBackground, setSelectedBackground] = useState<string | null>(null);
    const [selectedVariation, setSelectedVariation] = useState<string | null>(null);

    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const [variationsGenerated, setVariationsGenerated] = useState<boolean>(false);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const selectBackgroundRef = useRef(null);
    const backToStylesRef = useRef(null);

    const backgroundOptionsRef = useRef(null);
    const variationsRef = useRef(null);

    gsap.set(selectBackgroundRef.current, { position: "absolute" });
    gsap.set(backgroundOptionsRef.current, { position: "absolute" });

    useEffect(() => {
        if (variationsGenerated && selectedProduct) {
            gsap.to(selectBackgroundRef.current, { x: "0rem", opacity: 1, pointerEvents: "auto", duration: 0.5 });
            gsap.to(backToStylesRef.current, { x: "-300rem", opacity: 0, pointerEvents: "none", duration: 0.5 });

            gsap.to(backgroundOptionsRef.current, { x: "0rem", opacity: 1, pointerEvents: "auto", duration: 0.5 });
            gsap.to(variationsRef.current, { x: "-300rem", opacity: 0, pointerEvents: "none", duration: 0.5 });
        } else {
            gsap.to(selectBackgroundRef.current, { x: "300rem", opacity: 0, pointerEvents: "none", duration: 0.5 });
            gsap.to(backToStylesRef.current, { x: "0rem", opacity: 1, pointerEvents: "auto", duration: 0.5 });

            gsap.to(backgroundOptionsRef.current, { x: "300rem", opacity: 0, pointerEvents: "none", duration: 0.5 });
            gsap.to(variationsRef.current, { x: "0rem", opacity: 1, pointerEvents: "auto", duration: 0.5 });
        }
    }, [variationsGenerated, selectedProduct, productImageSrc]);

    useEffect(() => {
        if (variationsGenerated && selectedProduct && selectedBackground) {
            setPreviewImage(images[selectedProduct][selectedBackground]["variation-1"]);
            setSelectedVariation("variation-1");
        }
    }, [variationsGenerated, selectedProduct, selectedBackground]);

    useEffect(() => {
        if (!selectedProduct || !selectedBackground) {
            setVariationsGenerated(false);
            setSelectedVariation(null);
        }
    }, [selectedProduct, selectedBackground]);

    const handleExampleProductClick = (image: string) => {
        setSelectedProduct(image);
        setproductImageSrc(image);

        setPreviewImage(images[image]["transparent"]);

        setSelectedBackground(null);
        setBackgroundImageSrc(null);

        setIsPopupOpen(true);
        onFileUploadSuccess();
    };

    const handleExampleBackgroundClick = (image: string) => {
        setSelectedBackground(image);
        setBackgroundImageSrc(image);
    };

    const handleVariationClick = (image: string) => {
        if (selectedProduct && selectedBackground) {
            setPreviewImage(images[selectedProduct][selectedBackground][image]);
        }
        setSelectedVariation(image);
    };

    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragIn = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter.current++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDragging(true);
        }
    };

    const handleDragOut = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter.current--;
        if (dragCounter.current === 0) {
            setDragging(false);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            e.dataTransfer.clearData();
            dragCounter.current = 0;
            handleFiles(e.dataTransfer.files);
        }
    };
    const handleFiles = (files: FileList) => {
        if (files.length === 0) {
            return;
        }

        const file = files[0]; // Only process the first file.

        //setFileName(file.name); // Set the name of the uploaded file.
        uploadFile(file); // Upload the file.

        const reader = new FileReader();

        // This event listener will happen when the reader has read the file
        reader.onload = () => {
            // Use reader.result to get the data URL of the file
            setproductImageSrc(reader.result as string);
            setPreviewImage(reader.result as string);
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);

        uploadFile(file); // Upload the file.
    };

    const uploadFile = (file: File) => {
        // TODO: Replace with your actual file upload logic.
        console.log(`Uploading file: ${file.name}`);

        // TODO: Replace with actual logic to run after file upload.
        onFileUploadSuccess();
        setSelectedProduct(null);
    };

    const onFileUploadSuccess = () => {
        // Open the popup and disable page scrolling
        setIsPopupOpen(true);

        // scroll to the bottom section
        gsap.to(window, { duration: 0.5, scrollTo: { y: ".generate" } });
    };

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            handleFiles(e.target.files);
        }
    };

    const closePopup = () => {
        // Close the popup and enable page scrolling
        setIsPopupOpen(false);
        gsap.to(window, { duration: 0.5, scrollTo: { y: ".demo__try", offsetY: 120 } });
        setSelectedProduct(null);
    };

    return (
        <>
            <section className="demo">
                <div className="demo__wrapper">
                    <div className="demo__info">
                        <div className="demo__para">
                            <h4>
                                Cutting-edge artificial intelligence algorithms with deep learning capabilities to produce ads that are not only visually
                                appealing but also highly effective in achieving marketing objectives.
                            </h4>
                        </div>
                    </div>
                    <div className="demo__try">
                        <div className="demo__headline">
                            <h1 className="h1">Try demo</h1>
                        </div>
                        <div className="demo__widget">
                            <div className="demo__upload">
                                <p className="text-2">Upload your product photo</p>
                                <label className={`file-upload ${dragging ? "active" : ""}`} htmlFor="file-upload">
                                    <div
                                        ref={dropRef}
                                        onDragEnter={handleDragIn}
                                        onDragLeave={handleDragOut}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                        className="demo__upload-box">
                                        <input id="file-upload" type="file" onChange={handleFileInput} style={{ display: "none" }} />
                                        <div className="demo__upload-overlay">
                                            <img alt="" className="upload-gif" src={downloadGif} />
                                            <div className="text-3">{dragging ? "Drop your image here" : "Click, paste or drop a file here to start"}</div>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div className="demo__example">
                                <p className="text-2">Select sample product</p>

                                <div className="demo__example-list">
                                    <Example
                                        selected={selectedProduct === "product-1"}
                                        image={images["product-1"]["full"]}
                                        onClick={() => {
                                            handleExampleProductClick("product-1");
                                        }}
                                        imageCover={"cover"}
                                    />
                                    <Example
                                        selected={selectedProduct === "product-2"}
                                        image={images["product-2"]["full"]}
                                        onClick={() => {
                                            handleExampleProductClick("product-2");
                                        }}
                                        imageCover={"cover"}
                                    />
                                    <Example
                                        selected={selectedProduct === "product-3"}
                                        image={images["product-3"]["full"]}
                                        onClick={() => {
                                            handleExampleProductClick("product-3");
                                        }}
                                        imageCover={"cover"}
                                    />
                                    <Example
                                        selected={selectedProduct === "product-4"}
                                        image={images["product-4"]["full"]}
                                        onClick={() => {
                                            handleExampleProductClick("product-4");
                                        }}
                                        imageCover={"cover"}
                                    />
                                    <Example
                                        selected={selectedProduct === "product-5"}
                                        image={images["product-5"]["full"]}
                                        onClick={() => {
                                            handleExampleProductClick("product-5");
                                        }}
                                        imageCover={"cover"}
                                    />
                                    <Example
                                        selected={selectedProduct === "product-6"}
                                        image={images["product-6"]["full"]}
                                        onClick={() => {
                                            handleExampleProductClick("product-6");
                                        }}
                                        imageCover={"cover"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isPopupOpen && (selectedProduct || productImageSrc) && previewImage && (
                <section className="generate">
                    <div className="generate__wrapper">
                        <div className="generate__headline">
                            <h4>Your product ad</h4>
                            <div onClick={closePopup} className="generate__close">
                                <div className="text-1">Close</div>
                                <svg className="generate__x" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292894 11.7071C-0.0976312 11.3166 -0.0976312 10.6834 0.292894 10.2929L4.58579 6L0.292894 1.70711C-0.0976306 1.31658 -0.0976306 0.683417 0.292894 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="generate__widget">
                            <div className="generate__widget-view">
                                <div className="generate__widget-preview">
                                    <LoadingImage src={previewImage} alt="" className="generate__widget-preview-item" />
                                </div>
                                <div className="generate__widget-select">
                                    {(selectedProduct || productImageSrc) && (
                                        <div>
                                            <div
                                                className="generate__widget-return"
                                                ref={selectBackgroundRef}
                                                onClick={() => {
                                                    setVariationsGenerated(false);
                                                    if (selectedProduct) setPreviewImage(images[selectedProduct]["transparent"]);
                                                }}>
                                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                                    <path d="M7 13L7.705 12.295L3.915 8.5H14V7.5H3.915L7.705 3.705L7 3L2 8L7 13Z" fill="white" />
                                                </svg>
                                                <p className="text-2">Back to styles</p>
                                            </div>

                                            <p className="text-2" ref={backToStylesRef}>
                                                Select background style
                                            </p>
                                        </div>
                                    )}

                                    {(selectedProduct || productImageSrc) && (
                                        <div>
                                            <div className="generate__widget-variations" ref={backgroundOptionsRef}>
                                                <div className="generate__widget-track">
                                                    {(selectedBackground &&
                                                        selectedProduct) && (
                                                            <div className="generate__widget-variations-list">
                                                                <Example
                                                                    image={images[selectedProduct][selectedBackground]["variation-1"]}
                                                                    imageCover={"cover"}
                                                                    size={"huge"}
                                                                    selected={selectedVariation === "variation-1"}
                                                                    onClick={() => {
                                                                        handleVariationClick("variation-1");
                                                                    }}
                                                                />
                                                                <Example
                                                                    image={images[selectedProduct][selectedBackground]["variation-2"]}
                                                                    imageCover={"cover"}
                                                                    size={"huge"}
                                                                    selected={selectedVariation === "variation-2"}
                                                                    onClick={() => {
                                                                        handleVariationClick("variation-2");
                                                                    }}
                                                                />
                                                                <Example
                                                                    image={images[selectedProduct][selectedBackground]["variation-3"]}
                                                                    imageCover={"cover"}
                                                                    size={"huge"}
                                                                    selected={selectedVariation === "variation-3"}
                                                                    onClick={() => {
                                                                        handleVariationClick("variation-3");
                                                                    }}
                                                                />
                                                                <Example
                                                                    image={images[selectedProduct][selectedBackground]["variation-4"]}
                                                                    imageCover={"cover"}
                                                                    size={"huge"}
                                                                    selected={selectedVariation === "variation-4"}
                                                                    onClick={() => {
                                                                        handleVariationClick("variation-4");
                                                                    }}
                                                                />
                                                            </div>
                                                        )}
                                                </div>
                                            </div>

                                            <div className="generate__widget-examples" ref={variationsRef}>
                                                <div className="generate__widget-track">
                                                    <div className="generate__widget-list">
                                                        <Example
                                                            image={exampleBackgroundA}
                                                            height="tall"
                                                            imageCover={"cover"}
                                                            selected={selectedBackground === "background-1"}
                                                            onClick={() => {
                                                                handleExampleBackgroundClick("background-1");
                                                            }}
                                                        />
                                                        <Example
                                                            image={exampleBackgroundB}
                                                            height="tall"
                                                            imageCover={"cover"}
                                                            selected={selectedBackground === "background-2"}
                                                            onClick={() => {
                                                                handleExampleBackgroundClick("background-2");
                                                            }}
                                                        />
                                                        <Example
                                                            image={exampleBackgroundC}
                                                            height="tall"
                                                            imageCover={"cover"}
                                                            selected={selectedBackground === "background-3"}
                                                            onClick={() => {
                                                                handleExampleBackgroundClick("background-3");
                                                            }}
                                                        />
                                                        <Example image={exampleBackgroundD} height="tall" imageCover={"cover"} isLocked={true} />
                                                        <Example image={exampleBackgroundE} height="tall" imageCover={"cover"} isLocked={true} />
                                                        <Example image={exampleBackgroundF} height="tall" imageCover={"cover"} isLocked={true} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="generate__widget-cta">
                                <Button
                                    text="Generate ad variations"
                                    size={"big"}
                                    textSize={"large"}
                                    color="blue"
                                    inactive={selectedBackground === null || selectedProduct === null}
                                    onClick={() => {
                                        if (selectedProduct !== null && selectedBackground !== null) {
                                            setVariationsGenerated(true);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Demo;
