import { Camera, ClipboardList, Palette, LayoutList, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Home() {
    return (
        <main className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <header className="flex justify-between items-center py-4">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                    6학년 홈페이지
                </h1>
                <a
                    href="https://classroom.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                >
                    구글로 수업 입장
                </a>
            </header>

            {/* Hero Section */}
            <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    반가워요!<br className="md:hidden" /> 우리의 홈페이지입니다 🏠
                </h2>
                <p className="text-slate-600 md:text-lg">
                    오늘도 즐겁고 신나는 배움이 가득한 하루를 만들어봐요.
                </p>
            </section>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Column: Trace Cards */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-2 px-2">
                        <span className="text-lg font-bold text-slate-700">오늘의 흔적</span>
                    </div>

                    {/* Trace 1: Photos */}
                    <div className="bg-blue-50 p-6 rounded-2xl shadow-sm cursor-pointer transition-transform hover:scale-[1.02] active:scale-95 group">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">우리반 사진첩</h3>
                                <p className="text-slate-600 text-sm">함께한 소중한 순간들을 모았어요.</p>
                            </div>
                            <div className="bg-blue-200 p-3 rounded-xl text-blue-700 group-hover:bg-blue-300 transition-colors">
                                <Camera size={24} />
                            </div>
                        </div>
                    </div>

                    {/* Trace 2: Missions */}
                    <div className="bg-purple-50 p-6 rounded-2xl shadow-sm cursor-pointer transition-transform hover:scale-[1.02] active:scale-95 group">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">오늘의 미션</h3>
                                <p className="text-slate-600 text-sm">오늘 우리가 해결해야 할 과제들이에요.</p>
                            </div>
                            <div className="bg-purple-200 p-3 rounded-xl text-purple-700 group-hover:bg-purple-300 transition-colors">
                                <ClipboardList size={24} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Learning Tools */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-2 px-2">
                        <span className="text-lg font-bold text-slate-700">미디어 학습 도구</span>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm divide-y divide-slate-100 overflow-hidden">
                        {/* Tool 1 */}
                        <a href="#" className="flex items-center p-5 hover:bg-slate-50 transition-colors group">
                            <div className="bg-pink-100 p-3 rounded-xl text-pink-600 mr-4 group-hover:scale-110 transition-transform">
                                <Palette size={20} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800">캔바 (Canva)</h4>
                                <p className="text-xs text-slate-500">디자인 만들기</p>
                            </div>
                            <ChevronRight className="text-slate-300 group-hover:text-slate-500 transition-colors" size={20} />
                        </a>

                        {/* Tool 2 */}
                        <a href="#" className="flex items-center p-5 hover:bg-slate-50 transition-colors group">
                            <div className="bg-amber-100 p-3 rounded-xl text-amber-600 mr-4 group-hover:scale-110 transition-transform">
                                <LayoutList size={20} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800">패들렛 (Padlet)</h4>
                                <p className="text-xs text-slate-500">과제 제출 및 공유</p>
                            </div>
                            <ChevronRight className="text-slate-300 group-hover:text-slate-500 transition-colors" size={20} />
                        </a>

                        {/* Tool 3 */}
                        <a href="#" className="flex items-center p-5 hover:bg-slate-50 transition-colors group">
                            <div className="bg-green-100 p-3 rounded-xl text-green-600 mr-4 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800">저작권 돋보기</h4>
                                <p className="text-xs text-slate-500">올바른 저작권 사용법</p>
                            </div>
                            <ChevronRight className="text-slate-300 group-hover:text-slate-500 transition-colors" size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
}
