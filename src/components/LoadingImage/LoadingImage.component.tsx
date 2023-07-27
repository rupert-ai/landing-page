import React, { useState } from "react";

interface LoadingImageProps {
    src: string;
    alt: string;
    className: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ src, alt, className }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading && <div className="text-1">Loading...</div>}
            <img
                src={src}
                alt={alt}
                className={className}
                onLoad={handleImageLoad}
                style={{ display: isLoading ? "none" : "inline"}}
            />
        </div>
    );
};

export default LoadingImage;
