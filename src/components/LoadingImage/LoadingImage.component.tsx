import React, { useState, useEffect } from "react";
import "./LoadingImage.styles.scss";
import loaderGif from "../../assets/gifs/loading.gif";

interface LoadingImageProps {
    src: string;
    alt: string;
    className: string;
    loadingTime?: number;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ src, alt, className, loadingTime }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
    }, [src]);

    const handleImageLoad = () => {
        if (loadingTime) {
            const delay = Math.random() * (loadingTime * 1.2 - loadingTime * 0.8) + loadingTime * 0.8;

            setTimeout(() => {
                setIsLoading(false);
            }, delay);
        } else {
            setIsLoading(false);
        }
    };

    return (
        <div className="loading-image">
            {isLoading && (
                <div className="image-loader">
                    <img alt="Loading..." src={loaderGif} className="image-loader-gif" />
                </div>
            )}
            <img src={src} alt={alt} className={className} onLoad={handleImageLoad} style={{ display: isLoading ? "none" : "inline" }} />
        </div>
    );
};

export default LoadingImage;
