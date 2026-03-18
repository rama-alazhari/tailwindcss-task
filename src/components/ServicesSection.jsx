
const ServicesSection = () => {
    const cards = [
        { 
            title: 'تطوير الواجهات الأمامية', 
            desc: 'بناء مواقع سريعة وتفاعلية باستخدام React.js و Next.js مع التركيز على تجربة المستخدم.',
            features: ['React & Redux', 'Tailwind CSS v4', 'Responsive Design'],
            icon: '💻'
        },
        { 
            title: 'تطوير الـ Backend', 
            desc: 'بناء قواعد بيانات وأنظمة خلفية قوية ومستقرة باستخدام Node.js و Express و MongoDB.',
            features: ['REST APIs', 'Node.js', 'Database Management'],
            icon: '⚙️'
        },
        { 
            title: 'تصميم واجهات المستخدم', 
            desc: 'تصميم واجهات عصرية (UI/UX) تضمن سهولة الاستخدام وجاذبية المظهر للمستخدم النهائي.',
            features: ['Figma to Code', 'User Experience', 'Modern UI'],
            icon: '🎨'
        },
    ];

    return (
        <section className='bg-gray-50 py-24 px-6 overflow-hidden' dir="rtl">
            <div className='max-w-7xl mx-auto'>
                <div className='text-center space-y-4 mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>خدماتي المتكاملة</h2>
                    <p className='text-gray-500 text-xl max-w-2xl mx-auto'>أقدم حلولاً تقنية شاملة تساعدك على بناء وجود رقمي قوي ومميز.</p>
                    <div className='w-24 h-1.5 rounded-full bg-blue-600 mx-auto' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className='group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600'
                        >
                            {/* الأيقونة */}
                            <div className='text-4xl mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300'>
                                {card.icon}
                            </div>

                            {/* العنوان والوصف */}
                            <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                                {card.title}
                            </h3>
                            <p className='text-gray-600 leading-relaxed mb-6'>
                                {card.desc}
                            </p>

                            {/* المميزات الصغيرة */}
                            <div className='flex flex-wrap gap-2 pt-4 border-t border-gray-50'>
                                {card.features.map((feat, i) => (
                                    <span key={i} className='text-xs font-semibold bg-gray-100 text-gray-500 px-3 py-1 rounded-full'>
                                        {feat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;