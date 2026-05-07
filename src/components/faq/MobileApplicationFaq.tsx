import faqShape from '../../../public/assets/img/home-10/faq/faq-shape-1.png';
import Image from 'next/image';

const MobileApplicationFaq = () => {
    const faqItems = [
        {
            id: "collapseOne",
            question: "How long does Etsy to Shopify migration take?    ",
            answer: "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
            show: true
        },
        {
            id: "collapseTwo",
            question: "Will I lose my Etsy customers or reviews?",
            answer: "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
            show: false
        },
        {
            id: "collapseThree",
            question: "Can you redesign my existing Shopify store?",
            answer: "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
            show: false
        },
        {
            id: "collapseFour",
            question: "Do you provide marketing services?",
            answer: "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
            show: false
        },
        {
            id: "collapseFive",
            question: "What is the cost?",
            answer: "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
            show: false
        },
        
    ];

    return (
        <div className="app-faq-area p-relative pb-120">
            <div className="app-faq-shape" data-speed=".8">
                {/* <Image src={faqShape} alt="faq-shape" /> */}
            </div>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="app-faq-heading p-relative mb-40">
                            <span className="tp-section-subtitle border-bg bg-color tp_fade_anim" data-delay=".3">FAQ</span>
                            <h3 className="tp-section-title-phudu fs-70 mb-20 tp_fade_anim" data-delay=".5">Got any <br /> questions?</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="app-faq-wrap pl-70">
                            <div className="ai-faq-accordion-wrap">
                                <div className="accordion" id="accordionExample">
                                    {faqItems.map((item, index) => (
                                        <div className="accordion-items" key={index}>
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`accordion-buttons ${item.show ? '' : 'collapsed'}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${item.id}`}
                                                    aria-expanded={item.show ? "true" : "false"}
                                                    aria-controls={item.id}
                                                >
                                                    {item.question}
                                                    <span className="accordion-icon"></span>
                                                </button>
                                            </h2>
                                            <div
                                                id={item.id}
                                                className={`accordion-collapse collapse ${item.show ? 'show' : ''}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileApplicationFaq;