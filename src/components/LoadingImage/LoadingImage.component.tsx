import React, { useState } from "react";

interface LoadingImageProps {
    src: string;
    alt: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ src, alt }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading && <div className="text-1">Loading...</div>}
            <img src={src} alt={alt} onLoad={handleImageLoad} style={{ display: isLoading ? "none" : "inline", height: "200rem", width: "200rem" }} />
        </div>
    );
};

export default LoadingImage;
