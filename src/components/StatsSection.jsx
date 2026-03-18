const StatsSection = () => {
    const stats = [
        { num: "+50", title: "مشروع مكتمل" },
        { num: "+1000", title: "ساعة برمجة" },
        { num: "+20", title: "عميل سعيد" },
        { num: "+5", title: "سنوات خبرة" }
    ];

    return (
        <section className="py-20 bg-linear-to-r from-blue-600 via-blue-500 to-indigo-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/60 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/60 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="transition-all duration-300 hover:scale-110"
                        >
                            <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-md">
                                {stat.num}
                            </div>
                            <div className="text-blue-100 text-lg md:text-xl font-medium">
                                {stat.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;