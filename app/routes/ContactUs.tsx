export default function ContactUs() {
    return (
        <div className="min-h-[900px] bg-[#faf8f7] font-['Poppins'] text-[#111]">
            <section className="relative overflow-hidden bg-[#111] px-[80px] py-[72px] text-white">
                <img src="/contact-banner.jpg" alt="Professional insurance consultation" className="absolute inset-0 h-full w-full object-cover opacity-35" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
                <div className="relative mx-auto w-[1280px]">
                    <p className="text-[13px] font-medium uppercase tracking-[2px] text-[#d9785f]">We are here to help</p>
                    <h1 className="mt-3 text-[52px] font-semibold tracking-[-1px]">Contact us</h1>
                    <p className="mt-5 max-w-[610px] text-[16px] leading-[1.7] text-white/70">Have a question about a policy, claim or payment? Send us a message and our team will help you find the right next step.</p>
                </div>
            </section>

            <section className="mx-auto grid w-[1280px] grid-cols-[420px_1fr] gap-12 py-[70px]">
                <div className="rounded-[8px] bg-[#111] p-9 text-white">
                    <p className="text-[12px] uppercase tracking-[1.5px] text-white/45">Purabi Insurance</p>
                    <h2 className="mt-5 text-[29px] font-semibold leading-[1.25]">Let's make insurance easier for you.</h2>
                    <div className="mt-12 space-y-7 text-[13px]">
                        <div><p className="text-white/45">Office hours</p><p className="mt-1">Sunday to Thursday · 10 AM to 6 PM</p></div>
                        <div><p className="text-white/45">Support</p><p className="mt-1">Our customer team is ready to assist.</p></div>
                        <div><p className="text-white/45">Best for</p><p className="mt-1">Policy questions · Claims · Payments</p></div>
                    </div>
                </div>

                <form className="rounded-[8px] border border-[#eadfdc] bg-white p-9 shadow-[0_8px_28px_rgba(0,0,0,.04)]">
                    <h2 className="text-[25px] font-semibold">Send a message</h2>
                    <p className="mt-2 text-[13px] text-[#777]">Fill in the details below and we'll get back to you.</p>
                    <div className="mt-8 grid grid-cols-2 gap-5">
                        <label className="text-[12px] text-[#555]">Full name<input className="mt-2 h-12 w-full rounded-[5px] border border-[#ddd] px-4 outline-none focus:border-[#ac3e25]" placeholder="Your name" /></label>
                        <label className="text-[12px] text-[#555]">Email address<input type="email" className="mt-2 h-12 w-full rounded-[5px] border border-[#ddd] px-4 outline-none focus:border-[#ac3e25]" placeholder="you@example.com" /></label>
                    </div>
                    <label className="mt-5 block text-[12px] text-[#555]">Subject<input className="mt-2 h-12 w-full rounded-[5px] border border-[#ddd] px-4 outline-none focus:border-[#ac3e25]" placeholder="How can we help?" /></label>
                    <label className="mt-5 block text-[12px] text-[#555]">Message<textarea className="mt-2 h-36 w-full resize-none rounded-[5px] border border-[#ddd] p-4 outline-none focus:border-[#ac3e25]" placeholder="Tell us a little more..." /></label>
                    <button type="button" className="mt-6 rounded-[5px] bg-[#ac3e25] px-7 py-3.5 text-[13px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#922f1c] hover:shadow-[0_8px_20px_rgba(172,62,37,.22)]">Send message</button>
                </form>
            </section>
        </div>
    );
}
