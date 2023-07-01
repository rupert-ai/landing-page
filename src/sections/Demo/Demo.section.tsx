import React, { FC, useRef, useState, DragEvent, ChangeEvent } from "react";
import "./Demo.styles.scss";

const Demo: FC = () => {
    const [dragging, setDragging] = useState(false);
    const dragCounter = useRef(0);
    const dropRef = useRef<HTMLDivElement | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

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
            console.log("No files selected.");
            return;
        }

        const file = files[0]; // Only process the first file.
        console.log(file);

        setFileName(file.name); // Set the name of the uploaded file.
        uploadFile(file); // Upload the file.
    };

    const uploadFile = (file: File) => {
        // TODO: Replace with your actual file upload logic.
        console.log(`Uploading file: ${file.name}`);

        // TODO: Replace with actual logic to run after file upload.
        onFileUploadSuccess(file);
    };

    const onFileUploadSuccess = (file: File) => {
        // This function will be called after the file upload is successful.
        console.log(`File upload successful: ${file.name}`);
    };

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            handleFiles(e.target.files);
        }
    };

    return (
        <section className="demo">
            <div className="demo__wrapper">
                <div className="demo__info">
                    <div className="demo__para">
                        <h4>
                            Cutting-edge artificial intelligence algorithms with deep learning capabilities to produce ads that are not only visually appealing
                            but also highly effective in achieving marketing objectives.
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
                            {!fileName && (
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
                                            <div className="text-3">Click, paste or drop a file here to start</div>
                                        </div>
                                    </div>
                                </label>
                            )}
                            {fileName && (
                                <div
                                    ref={dropRef}
                                    onDragEnter={handleDragIn}
                                    onDragLeave={handleDragOut}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                    className="demo__upload-box">
                                    <div className="demo__upload-overlay">
                                        <div className="text-3">{fileName}</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="demo__example">
                            <p className="text-2">Or try with an example</p>
                            <div className="demo__example-list">
                                <div className="demo__example-item"></div>
                                <div className="demo__example-item"></div>
                                <div className="demo__example-item"></div>
                                <div className="demo__example-item"></div>
                                <div className="demo__example-item"></div>
                                <div className="demo__example-item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
