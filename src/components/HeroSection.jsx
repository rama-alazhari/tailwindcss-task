
const AVATAR_URL = "/public/rama.jpeg";

const stats = [
  { label: 'سنوات خبرة', value: '+3' },
  { label: 'مشروع مكتمل', value: '+30' },
  { label: 'عميل سعيد', value: '+15' },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-28 font-[Tajawal,sans-serif]">
      <div className="absolute inset-x-0 bottom-0 -mb-1 text-indigo-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-right space-y-6" dir="rtl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              أصنع لكِ تجربة مستخدم{' '}
              <span className="bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                عصرية وسلسة
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              أنا راما الازهري، مطورة واجهات برمجية (Front-End) متخصصة في بناء تطبيقات ويب تفاعلية وواضحة باستخدام React و Tailwind CSS. أركز على تحويل الأفكار إلى واقع رقمي جذاب وأداء عالٍ.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 max-w-xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row-reverse gap-4 pt-8">
              <button className="px-8 py-3.5 rounded-full bg-linear-to-r from-blue-600 to-indigo-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                استعراض مشاريعي
              </button>
              <button className="px-8 py-3.5 rounded-full bg-white text-gray-900 font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group">
                <svg className="w-5 h-5 text-blue-600 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                مشاهدة سيرتي الذاتية
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 w-full max-w-md lg:max-w-xl transition-all hover:scale-105 duration-500">
              <img 
                src={AVATAR_URL}
                alt="Personal Avatar"
                className="w-full h-auto rounded-3xl object-cover shadow-2xl border-12 border-white"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 rounded-xl bg-indigo-50 flex items-center justify-center text-blue-600">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364 6.364l-.707-.707M6.364 3.636l.707.707M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">مبدعة في</div>
                  <div className="text-xl font-bold text-gray-900">حل المشاكل كودياً</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;