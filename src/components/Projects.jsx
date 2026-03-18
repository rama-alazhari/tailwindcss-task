const Projects = () => {
  const projectCards = [
    {
      title: 'منصة تعليمية ذكية',
      type: 'Full Stack',
      desc: 'تطبيق ويب متكامل لإدارة الدورات التدريبية باستخدام React و Node.js.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-design-hosting-operation-system-concept_335657-2342.jpg',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'متجر إلكتروني عصري',
      type: 'Front-end',
      desc: 'تصميم متجر متجاوب بالكامل مع سلة تسوق وتجربة مستخدم سلسة.',
      tech: ['Next.js', 'Tailwind CSS', 'Redux'],
      image: 'https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-22153.jpg',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'تطبيق إدارة المهام',
      type: 'React Project',
      desc: 'لوحة تحكم (Dashboard) لمتابعة المشاريع والمهام اليومية مع إشعارات.',
      tech: ['React', 'Firebase', 'Tailwind'],
      image: 'https://img.freepik.com/free-vector/app-development-concept-design_23-2148670354.jpg',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'بورتفوليو احترافي',
      type: 'UI/UX Design',
      desc: 'تصميم وتنفيذ موقع شخصي لعرض الأعمال بأحدث تقنيات CSS.',
      tech: ['Tailwind', 'React', 'Framer Motion'],
      image: 'https://img.freepik.com/free-vector/portfolio-concept-design_23-2148670354.jpg',
      demoLink: '#',
      codeLink: '#'
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 italic text-center">معرض أعمالي</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light text-center">
            مجموعة من المشاريع التي قمت بتطويرها، تعكس شغفي بالبرمجة والتصميم.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectCards.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-blue-600/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                  <a href={project.demoLink} className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                  <a href={project.codeLink} className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-all transform translate-y-4 group-hover:translate-y-0 delay-75 shadow-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm z-10">
                  {project.type}
                </div>
              </div>

              <div className="p-6 space-y-3 text-right">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 justify-start">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-gray-400 border border-gray-200 px-2 py-0.5 rounded transition-colors group-hover:border-blue-200 group-hover:text-blue-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <button className="flex-1 bg-gray-900 text-white py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors shadow-sm">
                    عرض التفاصيل
                  </button>
                  <button className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors text-gray-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;