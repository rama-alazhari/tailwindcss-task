import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const contactInfo = [
    {
      id: 1,
      label: 'الموقع',
      value: 'الشارقة، الإمارات العربية المتحدة',
      color: 'blue',
      icon: <HiOutlineLocationMarker className="w-7 h-7" />
    },
    {
      id: 2,
      label: 'الهاتف',
      value: '+971 50 XXX XXXX',
      color: 'indigo',
      icon: <HiOutlinePhone className="w-7 h-7" />
    },
    {
      id: 3,
      label: 'البريد الإلكتروني',
      value: 'rama@example.com',
      color: 'purple',
      icon: <HiOutlineMail className="w-7 h-7" />
    }
  ];

  return (
    <footer className="bg-linear-to-t from-black to-gray-500 text-white py-16 px-4 md:px-12 lg:px-20" dir="rtl">
      <div className="max-w-[95%] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-4xl font-black mb-3 italic tracking-tight text-white">
                لنبدأ بشيء <span className="text-blue-400">عظيم</span>
              </h2>
              <p className="text-gray-300">أنا متحمسة لسماع فكرتك القادمة، أرسلي لي تفاصيلك وسأرد خلال 24 ساعة.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 mr-2">الاسم</label>
                  <input type="text" placeholder="الاسم الكامل" className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 mr-2">البريد الإلكتروني</label>
                  <input type="email" placeholder="example@mail.com" className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 mr-2">رسالتك</label>
                <textarea rows="5" placeholder="اكتبي تفاصيل مشروعك هنا..." className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 resize-none"></textarea>
              </div>
              <button className="flex items-center justify-center gap-3 w-full md:w-max px-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-xl transition-all transform hover:scale-[1.03] active:scale-95 group">
                إرسال الرسالة <FaPaperPlane className="transition-transform" />
              </button>
            </form>
          </div>

          {/* القسم الثاني (5 أعمدة): معلومات التواصل */}
          <div className="lg:col-span-5 flex flex-col justify-between py-6">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">معلومات الاتصال</h2>
                <div className="w-20 h-1.5 bg-blue-500 rounded-full"></div>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.id} className="flex items-start gap-6 group">
                    <div className="w-16 h-16 shrink-0 rounded-[1.2rem] bg-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all duration-500 border border-white/10 shadow-inner">
                      {info.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-gray-400 text-sm font-medium tracking-widest">{info.label}</h4>
                      <p className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors" dir={info.id === 1 ? 'rtl' : 'ltr'}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          
          </div>
        </div>

        <div className="mt-20 pt-10 text-center border-t-4 border-white text-gray-400 text-sm">
          <p>© 2026 جميع الحقوق محفوظة لـ <span className="text-white font-bold "> (Rama)</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;