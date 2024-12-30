function MainHeading({ title, text, textColor = "#000", titleColor = "#ebedeb" }) {
    return (
        <div className="text-center relative">
            <h4 
                className="uppercase text-8xl font-extrabold" 
                style={{ color: titleColor }}
            >
                {title}
            </h4>
            <div className="absolute top-9 left-[50%] translate-x-[-50%] flex items-center flex-col">
                <h6 
                    className="text-3xl font-bold mb-7 capitalize" 
                    style={{ color: textColor }}
                >
                    {text}
                </h6>
                <div className="w-12 h-1 bg-[#ff5e14] text-center rounded-lg"></div>
            </div>
        </div>
    );
}

export default MainHeading;