import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import FAQAccordion from '../components/feature/FAQAccordion';

const Donate = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (val) => {
    setAmount(val);
  };

  const faqs = [
    {
      question: 'Is my donation tax-deductible?',
      answer: 'Yes, NayePankh Foundation is a registered NGO under sections 80G & 12A of the Income Tax Act. All donations are tax-deductible.'
    },
    {
      question: 'Can I donate in kind?',
      answer: 'Absolutely! We accept books, clothes, dry rations, and stationary. Please contact us to arrange a pickup or drop-off.'
    },
    {
      question: 'How is my money used?',
      answer: '85% of your donation goes directly to our field programs (education, health, food distribution). The remaining 15% is used for administrative and operational costs.'
    }
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionTitle title="Make a Difference Today" subtitle="Donate" />
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Your contribution can help us feed a hungry child, send a girl to school, or plant a tree for a sustainable future. No amount is too small.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Donation Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Choose Donation Amount</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {['500', '1000', '2500', '5000', '10000'].map((val) => (
                <button
                  key={val}
                  onClick={() => handleAmountChange(val)}
                  className={`py-3 rounded-xl border-2 font-semibold transition-all ${
                    amount === val 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary'
                  }`}
                >
                  ₹{val}
                </button>
              ))}
              <div className="relative col-span-3 mt-2">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  placeholder="Custom Amount"
                  className="w-full py-4 pl-10 pr-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-primary font-semibold"
                />
              </div>
            </div>
            
            <form className="space-y-4 mb-8">
              <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:border-primary" />
              <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:border-primary" />
            </form>
            
            <Button className="w-full py-4 text-lg" disabled={!amount}>
              Donate ₹{amount || '0'} Now
            </Button>
          </Card>

          {/* Impact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Your Impact</h3>
            <div className="space-y-6">
              <Card className="p-6 flex items-center gap-6" hover={false}>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-primary">₹500</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Feeds a Family</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Provides a month's ration for a family of 4.</p>
                </div>
              </Card>
              <Card className="p-6 flex items-center gap-6" hover={false}>
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-accent">₹1500</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Educates a Child</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Sponsors a child's education for an entire year.</p>
                </div>
              </Card>
              <Card className="p-6 flex items-center gap-6" hover={false}>
                <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-orange-500">₹5000</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Empowers a Woman</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Funds a vocational training course for a woman.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <SectionTitle title="Frequently Asked Questions" subtitle="Got Doubts?" />
          <FAQAccordion faqs={faqs} />
        </div>

      </div>
    </div>
  );
};

export default Donate;
