import React, { FC, useRef, useState, DragEvent, ChangeEvent } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import "./Demo.styles.scss";
import Example from "../../components/Example/Example.component";

import exampleProduct from "../../assets/images/products/1.png";
import exampleBackground from "../../assets/images/backgrounds/1.png";

const Demo: FC = () => {
    gsap.registerPlugin(ScrollToPlugin);
    const [dragging, setDragging] = useState(false);
    const dragCounter = useRef(0);
    const dropRef = useRef<HTMLDivElement | null>(null);
    //const [fileName, setFileName] = useState<string | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleExampleProductClick = (image: string) => {
        setImageSrc(image);
        setIsPopupOpen(true);
        onFileUploadSuccess();
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
            setImageSrc(reader.result as string);
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
    };

    const onFileUploadSuccess = () => {
        // scroll to the bottom section
        gsap.to(window, { duration: 0.5, scrollTo: { y: ".generate" } });
        // Open the popup and disable page scrolling
        setIsPopupOpen(true);
    };

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            handleFiles(e.target.files);
        }
    };

    const closePopup = () => {
        // Close the popup and enable page scrolling
        setIsPopupOpen(false);
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
                                <label className="file-upload" htmlFor="file-upload">
                                    <div
                                        ref={dropRef}
                                        onDragEnter={handleDragIn}
                                        onDragLeave={handleDragOut}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                        className="demo__upload-box">
                                        <input id="file-upload" type="file" onChange={handleFileInput} style={{ display: "none" }} />
                                        <div className="demo__upload-overlay">
                                            <div className="text-3">{dragging ? "Drop your image here" : "Click, paste or drop a file here to start"}</div>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div className="demo__example">
                                <p className="text-2">Or try with an example</p>
                                <div className="demo__example-list">
                                    <Example
                                        image={exampleProduct}
                                        onClick={() => {
                                            handleExampleProductClick(exampleProduct);
                                        }}
                                    />
                                    <Example />
                                    <Example />
                                    <Example />
                                    <Example />
                                    <Example />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isPopupOpen && imageSrc && (
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
                                    <img alt="" src={imageSrc} className="generate__widget-preview-item" />
                                    <div className="generate__widget-preview-background"></div>
                                </div>
                                <div className="generate__widget-select">
                                    <p className="text-2">Or try with an example</p>
                                    <div className="generate__widget-examples">
                                        <div className="generate__widget-track">
                                            <div className="generate__widget-list">
                                                <Example image={exampleBackground} />
                                                <Example />
                                                <Example />
                                                <Example />
                                                <Example />
                                                <Example />
                                                <Example />
                                                <Example />
                                                <Example />
                                                <Example />
                                                <Example />
                                                <Example />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="generate__widget-cta">
                                <a href="/" className="button button--big button--blue">
                                    <h4>Generate ad variations</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Demo;
