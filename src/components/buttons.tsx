import React from 'react';

export const ActiveAddButton: React.FC = () => (
    /* 반응형 사이즈 조절 */
    <div className="Button w-full h-[56px]">

{/* Large Add Button */}
    <div className="hidden sm:block md:block w-full h-[56px] object-contain  grid place-items-center"  >
        <svg className="w-auto h-[56px]" viewBox="0 0 168 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"> 
        <rect x="4.6521" y="5" width="162.348" height="50" rx="23" fill="#0F172A" stroke="#0F172A" stroke-width="2"/>
        <rect x="1" y="1" width="162.348" height="50" rx="23" fill="#7C3AED" stroke="#0F172A" stroke-width="2"/>
        <path d="M44.5 26L56.5 26" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M50.5 32L50.5 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M65.099 21.368V20.024H69.355V18.408H70.939V20.024H75.211V21.368H70.939V21.48C70.939 21.64 70.955 21.8 70.987 21.96C71.0297 22.1093 71.1043 22.2587 71.211 22.408C71.3177 22.5467 71.467 22.6907 71.659 22.84C71.8617 22.9787 72.1177 23.1227 72.427 23.272C72.9603 23.5173 73.499 23.752 74.043 23.976C74.587 24.1893 75.163 24.4027 75.771 24.616L75.243 25.848C74.5603 25.6027 73.947 25.3733 73.403 25.16C72.859 24.936 72.3683 24.728 71.931 24.536C71.3977 24.3013 70.9977 24.0987 70.731 23.928C70.4643 23.7467 70.2723 23.5653 70.155 23.384H70.139C70.0217 23.5867 69.8297 23.7733 69.563 23.944C69.2963 24.1147 68.8963 24.3173 68.363 24.552C67.9257 24.744 67.435 24.9467 66.891 25.16C66.347 25.3733 65.7337 25.6027 65.051 25.848L64.491 24.616C65.099 24.4027 65.6803 24.1893 66.235 23.976C66.7897 23.752 67.3283 23.5173 67.851 23.272C68.1603 23.1333 68.411 22.9893 68.603 22.84C68.795 22.6907 68.9443 22.5413 69.051 22.392C69.1683 22.2427 69.2483 22.0933 69.291 21.944C69.3337 21.784 69.355 21.6293 69.355 21.48V21.368H65.099ZM69.371 33.24V28.376H63.403V27.032H76.939V28.376H70.971V33.24H69.371ZM91.7735 25.32H89.5015V33.24H87.9175V18.488H89.5015V23.944H91.7735V25.32ZM78.2535 28.728C79.1068 28.2267 79.8268 27.784 80.4135 27.4C81.0108 27.0053 81.5015 26.648 81.8855 26.328C82.2802 26.008 82.5895 25.7093 82.8135 25.432C83.0375 25.144 83.2028 24.856 83.3095 24.568C83.4162 24.28 83.4802 23.9867 83.5015 23.688C83.5335 23.3787 83.5495 23.032 83.5495 22.648V21.224H78.5415V19.864H85.1175V22.664C85.1175 23.1547 85.1015 23.592 85.0695 23.976C85.0482 24.36 84.9735 24.728 84.8455 25.08C84.7282 25.4213 84.5415 25.7627 84.2855 26.104C84.0402 26.4347 83.6935 26.792 83.2455 27.176C82.7975 27.5493 82.2322 27.9653 81.5495 28.424C80.8775 28.8827 80.0562 29.4053 79.0855 29.992L78.2535 28.728ZM96.88 29.944C96.3147 29.944 95.8133 29.8587 95.376 29.688C94.9387 29.5067 94.5653 29.272 94.256 28.984C93.9467 28.696 93.712 28.3653 93.552 27.992C93.392 27.6187 93.312 27.24 93.312 26.856V25.928C93.312 25.544 93.392 25.1653 93.552 24.792C93.712 24.4187 93.9467 24.088 94.256 23.8C94.5653 23.5013 94.9387 23.2667 95.376 23.096C95.8133 22.9147 96.3147 22.824 96.88 22.824C97.4347 22.824 97.9307 22.9147 98.368 23.096C98.816 23.2667 99.1947 23.5013 99.504 23.8C99.8133 24.088 100.048 24.4187 100.208 24.792C100.368 25.1653 100.448 25.544 100.448 25.928V26.856C100.448 27.24 100.368 27.6187 100.208 27.992C100.048 28.3653 99.8133 28.696 99.504 28.984C99.1947 29.272 98.816 29.5067 98.368 29.688C97.9307 29.8587 97.4347 29.944 96.88 29.944ZM106.336 25.72H104.064V33.24H102.48V18.488H104.064V24.344H106.336V25.72ZM96.88 24.152C96.24 24.152 95.7333 24.3333 95.36 24.696C94.9867 25.048 94.8 25.5173 94.8 26.104V26.68C94.8 27.2667 94.9867 27.736 95.36 28.088C95.7333 28.44 96.24 28.616 96.88 28.616C97.52 28.616 98.0267 28.44 98.4 28.088C98.7733 27.736 98.96 27.2667 98.96 26.68V26.104C98.96 25.5173 98.7733 25.048 98.4 24.696C98.0267 24.3333 97.52 24.152 96.88 24.152ZM96.096 20.664V18.584H97.68V20.664H101.104V22.008H92.576V20.664H96.096ZM107.699 28.76C108.552 28.2587 109.272 27.816 109.859 27.432C110.456 27.0373 110.952 26.68 111.347 26.36C111.741 26.0293 112.051 25.7253 112.275 25.448C112.499 25.16 112.664 24.8773 112.771 24.6C112.888 24.312 112.957 24.0133 112.979 23.704C113.011 23.3947 113.027 23.048 113.027 22.664V21.208H107.987V19.848H114.595V22.68C114.595 23.16 114.579 23.5973 114.547 23.992C114.525 24.376 114.451 24.744 114.323 25.096C114.195 25.4373 114.003 25.7787 113.747 26.12C113.501 26.4507 113.149 26.808 112.691 27.192C112.243 27.576 111.677 27.9973 110.995 28.456C110.323 28.9147 109.501 29.4373 108.531 30.024L107.699 28.76ZM117.715 33.24V18.488H119.299V33.24H117.715Z" fill="white"/>
            </svg>
            </div>
{/* Small Add Button */}
    <div className="block sm:hidden md:hidden w-full h-[56px] object-contain  grid place-items-center">
            <svg className="w-auto h-[56px]"viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <rect x="2.21729" y="5" width="52.7826" height="50" rx="23" fill="#0F172A" stroke="#0F172A" stroke-width="2"/>
            <rect x="1" y="1" width="52.7826" height="50" rx="23" fill="#7C3AED" stroke="#0F172A" stroke-width="2"/>
            <path d="M20 26L32 26" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M26 32L26 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            </div>
      </div>


);

export const DefaultAddButton: React.FC = () => (
        /* 반응형 사이즈 조절 */
        <div className="Button w-full h-[56px] ">

        {/* Large Add Button */}
            <div className="hidden sm:block md:block object-contain  grid place-items-center"  >
                <svg className="w-[65%] h-[56px]" viewBox="0 0 168 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <rect x="4.6521" y="5" width="162.348" height="50" rx="23" fill="#0F172A" stroke="#0F172A" stroke-width="2"/>
                    <rect x="1" y="1" width="162.348" height="50" rx="23" fill="#E2E8F0" stroke="#0F172A" stroke-width="2"/>
                    <path d="M44.5 26L56.5 26" stroke="#0F172A" stroke-width="2" stroke-linecap="round"/>
                    <path d="M50.5 32L50.5 20" stroke="#0F172A" stroke-width="2" stroke-linecap="round"/>
                    <path d="M65.099 21.368V20.024H69.355V18.408H70.939V20.024H75.211V21.368H70.939V21.48C70.939 21.64 70.955 21.8 70.987 21.96C71.0297 22.1093 71.1043 22.2587 71.211 22.408C71.3177 22.5467 71.467 22.6907 71.659 22.84C71.8617 22.9787 72.1177 23.1227 72.427 23.272C72.9603 23.5173 73.499 23.752 74.043 23.976C74.587 24.1893 75.163 24.4027 75.771 24.616L75.243 25.848C74.5603 25.6027 73.947 25.3733 73.403 25.16C72.859 24.936 72.3683 24.728 71.931 24.536C71.3977 24.3013 70.9977 24.0987 70.731 23.928C70.4643 23.7467 70.2723 23.5653 70.155 23.384H70.139C70.0217 23.5867 69.8297 23.7733 69.563 23.944C69.2963 24.1147 68.8963 24.3173 68.363 24.552C67.9257 24.744 67.435 24.9467 66.891 25.16C66.347 25.3733 65.7337 25.6027 65.051 25.848L64.491 24.616C65.099 24.4027 65.6803 24.1893 66.235 23.976C66.7897 23.752 67.3283 23.5173 67.851 23.272C68.1603 23.1333 68.411 22.9893 68.603 22.84C68.795 22.6907 68.9443 22.5413 69.051 22.392C69.1683 22.2427 69.2483 22.0933 69.291 21.944C69.3337 21.784 69.355 21.6293 69.355 21.48V21.368H65.099ZM69.371 33.24V28.376H63.403V27.032H76.939V28.376H70.971V33.24H69.371ZM91.7735 25.32H89.5015V33.24H87.9175V18.488H89.5015V23.944H91.7735V25.32ZM78.2535 28.728C79.1068 28.2267 79.8268 27.784 80.4135 27.4C81.0108 27.0053 81.5015 26.648 81.8855 26.328C82.2802 26.008 82.5895 25.7093 82.8135 25.432C83.0375 25.144 83.2028 24.856 83.3095 24.568C83.4162 24.28 83.4802 23.9867 83.5015 23.688C83.5335 23.3787 83.5495 23.032 83.5495 22.648V21.224H78.5415V19.864H85.1175V22.664C85.1175 23.1547 85.1015 23.592 85.0695 23.976C85.0482 24.36 84.9735 24.728 84.8455 25.08C84.7282 25.4213 84.5415 25.7627 84.2855 26.104C84.0402 26.4347 83.6935 26.792 83.2455 27.176C82.7975 27.5493 82.2322 27.9653 81.5495 28.424C80.8775 28.8827 80.0562 29.4053 79.0855 29.992L78.2535 28.728ZM96.88 29.944C96.3147 29.944 95.8133 29.8587 95.376 29.688C94.9387 29.5067 94.5653 29.272 94.256 28.984C93.9467 28.696 93.712 28.3653 93.552 27.992C93.392 27.6187 93.312 27.24 93.312 26.856V25.928C93.312 25.544 93.392 25.1653 93.552 24.792C93.712 24.4187 93.9467 24.088 94.256 23.8C94.5653 23.5013 94.9387 23.2667 95.376 23.096C95.8133 22.9147 96.3147 22.824 96.88 22.824C97.4347 22.824 97.9307 22.9147 98.368 23.096C98.816 23.2667 99.1947 23.5013 99.504 23.8C99.8133 24.088 100.048 24.4187 100.208 24.792C100.368 25.1653 100.448 25.544 100.448 25.928V26.856C100.448 27.24 100.368 27.6187 100.208 27.992C100.048 28.3653 99.8133 28.696 99.504 28.984C99.1947 29.272 98.816 29.5067 98.368 29.688C97.9307 29.8587 97.4347 29.944 96.88 29.944ZM106.336 25.72H104.064V33.24H102.48V18.488H104.064V24.344H106.336V25.72ZM96.88 24.152C96.24 24.152 95.7333 24.3333 95.36 24.696C94.9867 25.048 94.8 25.5173 94.8 26.104V26.68C94.8 27.2667 94.9867 27.736 95.36 28.088C95.7333 28.44 96.24 28.616 96.88 28.616C97.52 28.616 98.0267 28.44 98.4 28.088C98.7733 27.736 98.96 27.2667 98.96 26.68V26.104C98.96 25.5173 98.7733 25.048 98.4 24.696C98.0267 24.3333 97.52 24.152 96.88 24.152ZM96.096 20.664V18.584H97.68V20.664H101.104V22.008H92.576V20.664H96.096ZM107.699 28.76C108.552 28.2587 109.272 27.816 109.859 27.432C110.456 27.0373 110.952 26.68 111.347 26.36C111.741 26.0293 112.051 25.7253 112.275 25.448C112.499 25.16 112.664 24.8773 112.771 24.6C112.888 24.312 112.957 24.0133 112.979 23.704C113.011 23.3947 113.027 23.048 113.027 22.664V21.208H107.987V19.848H114.595V22.68C114.595 23.16 114.579 23.5973 114.547 23.992C114.525 24.376 114.451 24.744 114.323 25.096C114.195 25.4373 114.003 25.7787 113.747 26.12C113.501 26.4507 113.149 26.808 112.691 27.192C112.243 27.576 111.677 27.9973 110.995 28.456C110.323 28.9147 109.501 29.4373 108.531 30.024L107.699 28.76ZM117.715 33.24V18.488H119.299V33.24H117.715Z" fill="#0F172A"/>
                    </svg>

                    </div>
        {/* Small Add Button */}
            <div className="block sm:hidden md:hidden w-full h-[56px] object-contain  grid place-items-center">
                        <svg className="w-[90%] h-[56px]" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.21729" y="5" width="52.7826" height="50" rx="23" fill="#0F172A" stroke="#0F172A" stroke-width="2"/>
                <rect x="1" y="1" width="52.7826" height="50" rx="23" fill="#E2E8F0" stroke="#0F172A" stroke-width="2"/>
                <path d="M20 26L32 26" stroke="#0F172A" stroke-width="2" stroke-linecap="round"/>
                <path d="M26 32L26 20" stroke="#0F172A" stroke-width="2" stroke-linecap="round"/>
                </svg>

              </div>
        </div>
        
)
