
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {

  const router = useRouter(); // useRouter 훅 사용

      // Header 클릭 시 홈으로 이동하는 함수
      const handleHeaderClick = () => {
        router.push('/'); // '/'로 리다이렉트
      };

      return (
            <div className="Header w-full cursor-pointer"
            onClick={handleHeaderClick}
            >
            {/* 데스크탑 헤더 */}
            <div className="hidden lg:block">
                    <svg className="w-full h-auto" viewBox="0 0 1920 60" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <mask id="path-1-inside-1_73_654" fill="white">
                    <path d="M0 0H1920V60H0V0Z"/>
                    </mask>
                    <path d="M0 0H1920V60H0V0Z" fill="white"/>
                    <path d="M1920 59H0V61H1920V59Z" fill="#E2E8F0" mask="url(#path-1-inside-1_73_654)"/>
                    <g clip-path="url(#clip0_73_654)">
                    <path d="M371 38.6755C374.876 31.1502 381.427 18.9616 385.487 21.5276C390.562 24.7352 378.105 34.6044 384.103 38.6755C390.101 42.7466 395.637 17.8266 401.082 21.5276C406.526 25.2286 395.822 34.9745 400.067 38.6755C403.462 41.6363 409.294 31.2394 414 23.2617" stroke="#6500C3" stroke-width="15.8161" stroke-linecap="round"/>
                    <path d="M394.841 30.0113C394.841 31.4303 394.492 32.6995 393.944 33.6033C393.393 34.5129 392.675 35.0051 391.942 35.0051C391.208 35.0051 390.49 34.5129 389.939 33.6033C389.391 32.6995 389.042 31.4303 389.042 30.0113C389.042 28.5922 389.391 27.3231 389.939 26.4193C390.49 25.5096 391.208 25.0175 391.942 25.0175C392.675 25.0175 393.393 25.5096 393.944 26.4193C394.492 27.3231 394.841 28.5922 394.841 30.0113Z" fill="white" stroke="#0F172A" stroke-width="0.64436"/>
                    <path d="M394.841 30.0113C394.841 30.8953 394.619 31.6803 394.276 32.2338C393.93 32.7923 393.495 33.072 393.069 33.072C392.644 33.072 392.208 32.7923 391.862 32.2338C391.52 31.6803 391.297 30.8953 391.297 30.0113C391.297 29.1273 391.52 28.3424 391.862 27.7888C392.208 27.2303 392.644 26.9506 393.069 26.9506C393.495 26.9506 393.93 27.2303 394.276 27.7888C394.619 28.3424 394.841 29.1273 394.841 30.0113Z" fill="#0F172A" stroke="#0F172A" stroke-width="0.64436"/>
                    <path d="M403.218 30.0113C403.218 31.4303 402.869 32.6995 402.321 33.6033C401.77 34.5129 401.052 35.0051 400.318 35.0051C399.585 35.0051 398.867 34.5129 398.316 33.6033C397.768 32.6995 397.419 31.4303 397.419 30.0113C397.419 28.5922 397.768 27.3231 398.316 26.4193C398.867 25.5096 399.585 25.0175 400.318 25.0175C401.052 25.0175 401.77 25.5096 402.321 26.4193C402.869 27.3231 403.218 28.5922 403.218 30.0113Z" fill="white" stroke="#0F172A" stroke-width="0.64436"/>
                    <path d="M403.218 30.0113C403.218 30.8953 402.996 31.6803 402.653 32.2338C402.307 32.7923 401.872 33.072 401.446 33.072C401.02 33.072 400.585 32.7923 400.239 32.2338C399.896 31.6803 399.674 30.8953 399.674 30.0113C399.674 29.1273 399.896 28.3424 400.239 27.7888C400.585 27.2303 401.02 26.9506 401.446 26.9506C401.872 26.9506 402.307 27.2303 402.653 27.7888C402.996 28.3424 403.218 29.1273 403.218 30.0113Z" fill="#0F172A" stroke="#0F172A" stroke-width="0.64436"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M500.488 26.3814C502.227 26.3697 503.632 24.9854 503.621 23.2968C503.609 21.5577 502.185 20.1525 500.446 20.1642C498.757 20.1756 497.392 21.5995 497.404 23.3386C497.415 25.0272 498.799 26.3928 500.488 26.3814Z" fill="#6500C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M503.561 34.5707C503.264 33.5648 502.45 32.3682 500.262 32.3829C498.573 32.3943 497.205 33.7784 497.216 35.467C497.227 37.0492 498.432 38.3494 499.989 38.4985L500.014 42.2507L500.491 41.947C502.98 40.3665 504.184 36.6833 503.561 34.5707Z" fill="#6500C3"/>
                    <path d="M440.33 29.6575C439.643 28.9368 438.787 28.5798 437.763 28.5867C436.398 28.5959 435.408 28.9439 434.794 29.6307C434.18 30.3175 433.876 31.2049 433.884 32.2929C433.89 33.2955 434.173 34.1043 434.732 34.7193C435.291 35.3342 436.168 35.6376 437.362 35.6296C437.938 35.6257 438.492 35.5047 439.024 35.2664C439.556 35.0282 440.001 34.6945 440.361 34.2654L440.33 29.6575ZM430.045 32.4787C430.036 31.1347 430.283 29.8851 430.788 28.7296C431.292 27.5742 432.011 26.6307 432.945 25.8991C433.9 25.146 435.006 24.7118 436.264 24.5967C436.904 24.5498 437.587 24.6838 438.315 24.9989C439.063 25.2926 439.728 25.7255 440.308 26.2976L440.265 19.9617L444.645 19.4202L444.767 37.4678C444.77 38.0012 444.581 38.4611 444.2 38.8477C443.819 39.2556 443.351 39.4614 442.796 39.4651L440.396 39.4813L440.384 37.6253C439.897 38.2259 439.292 38.7207 438.57 39.1095C437.868 39.4983 437.166 39.695 436.462 39.6997C435.203 39.7082 434.081 39.3851 433.095 38.7304C432.131 38.0968 431.378 37.2379 430.838 36.1535C430.318 35.0476 430.054 33.8227 430.045 32.4787ZM454.066 27.9331C453.106 27.9396 452.298 28.3183 451.641 29.0694C451.006 29.8204 450.693 30.8252 450.702 32.0838C450.709 33.2358 450.982 34.13 451.52 34.7664C452.079 35.4026 452.785 35.7179 453.638 35.7121C454.598 35.7057 455.396 35.3377 456.031 34.608C456.666 33.8784 456.979 32.8736 456.971 31.5936C456.963 30.4203 456.679 29.5156 456.12 28.8793C455.583 28.2429 454.898 27.9275 454.066 27.9331ZM446.959 32.365C446.949 30.829 447.228 29.4724 447.796 28.2953C448.386 27.1179 449.19 26.1738 450.209 25.463C451.228 24.7521 452.388 24.2963 453.688 24.0956C454.114 24.0287 454.509 23.994 454.871 23.9916C456.109 23.9833 457.22 24.2531 458.205 24.8012C459.211 25.3491 460.006 26.1651 460.589 27.2492C461.173 28.3333 461.47 29.6647 461.48 31.2433C461.492 32.9713 461.15 34.4669 460.454 35.7303C459.78 36.9722 458.848 37.9172 457.657 38.5652C456.489 39.2344 455.2 39.5737 453.792 39.5832C452.491 39.592 451.326 39.3118 450.298 38.7427C449.271 38.1949 448.455 37.379 447.85 36.2951C447.267 35.211 446.97 33.9009 446.959 32.365ZM474.691 24.0503L474.778 37.042C474.782 37.6394 474.572 38.1528 474.149 38.5823C473.725 39.0332 473.204 39.2607 472.585 39.2648L470.665 39.2777L470.567 24.6861L474.691 24.0503ZM470.05 19.1534C470.044 18.3428 470.349 17.6047 470.963 16.9392C471.577 16.2738 472.279 15.9384 473.068 15.9331C473.666 15.929 474.158 16.1284 474.544 16.5311C474.952 16.9337 475.159 17.455 475.163 18.095C475.168 18.927 474.864 19.6651 474.25 20.3092C473.635 20.9534 472.923 21.2781 472.112 21.2836C471.536 21.2875 471.044 21.0881 470.636 20.6855C470.25 20.2828 470.054 19.7721 470.05 19.1534ZM489.338 38.1282C488.828 38.3663 487.966 38.6281 486.752 38.9136L485.985 39.1107C485.836 39.1544 485.569 39.1775 485.185 39.1801C484.716 39.1833 484.236 39.1225 483.744 38.9978C483.274 38.8729 482.867 38.6837 482.524 38.43C481.023 37.2667 480.243 35.4266 480.183 32.9096L480.157 28.9737L477.79 29.2136L477.768 25.9177L480.134 25.6458L480.102 20.8779L484.098 20.307L484.131 25.1389L489.247 24.4965L489.259 26.3844C489.263 26.8537 489.105 27.2601 488.788 27.6036C488.491 27.947 488.109 28.1415 487.64 28.1874L484.154 28.5628L484.18 32.3707C484.184 32.9894 484.284 33.554 484.479 34.0647C484.674 34.5541 484.943 34.9256 485.287 35.1793C485.394 35.2426 485.543 35.2736 485.735 35.2723C486.076 35.27 486.524 35.203 487.078 35.0713C487.653 34.9181 488.143 34.7761 488.547 34.6454L489.338 38.1282Z" fill="#6500C3"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_73_654">
                    <rect width="151" height="40" fill="white" transform="translate(360 10)"/>
                    </clipPath>
                    </defs>
                    </svg>

            </div>
          {/* 태블릿 헤더 */}
            <div className="hidden sm:block lg:hidden">
                <svg className="w-full h-auto" viewBox="0 0 744 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_73_656" fill="white">
                <path d="M0 0H744V60H0V0Z"/>
                </mask>
                <path d="M0 0H744V60H0V0Z" fill="white"/>
                <path d="M744 59H0V61H744V59Z" fill="#E2E8F0" mask="url(#path-1-inside-1_73_656)"/>
                <g clip-path="url(#clip0_73_656)">
                <path d="M35 38.6756C38.8755 31.1503 45.427 18.9618 49.4871 21.5278C54.5622 24.7353 42.1052 34.6045 48.103 38.6756C54.1009 42.7467 59.6373 17.8268 65.0815 21.5277C70.5258 25.2287 59.8219 34.9746 64.0665 38.6756C67.4622 41.6364 73.294 31.2395 78 23.2619" stroke="#6500C3" stroke-width="15.8161" stroke-linecap="round"/>
                <path d="M58.8414 30.0115C58.8414 31.4306 58.4921 32.6997 57.9444 33.6035C57.3931 34.5132 56.6754 35.0053 55.9418 35.0053C55.2081 35.0053 54.4905 34.5132 53.9391 33.6035C53.3914 32.6997 53.0422 31.4306 53.0422 30.0115C53.0422 28.5925 53.3914 27.3233 53.9391 26.4196C54.4905 25.5099 55.2081 25.0177 55.9418 25.0177C56.6754 25.0177 57.3931 25.5099 57.9444 26.4196C58.4921 27.3233 58.8414 28.5925 58.8414 30.0115Z" fill="white" stroke="#0F172A" stroke-width="0.64436"/>
                <path d="M58.8413 30.0114C58.8413 30.8954 58.6188 31.6804 58.2761 32.2339C57.9304 32.7924 57.4949 33.0721 57.0693 33.0721C56.6437 33.0721 56.2081 32.7924 55.8624 32.2339C55.5197 31.6804 55.2973 30.8954 55.2973 30.0114C55.2973 29.1274 55.5197 28.3425 55.8624 27.7889C56.2081 27.2305 56.6437 26.9507 57.0693 26.9507C57.4949 26.9507 57.9304 27.2305 58.2761 27.7889C58.6188 28.3425 58.8413 29.1274 58.8413 30.0114Z" fill="#0F172A" stroke="#0F172A" stroke-width="0.64436"/>
                <path d="M67.2181 30.0115C67.2181 31.4306 66.8688 32.6997 66.3211 33.6035C65.7698 34.5132 65.0521 35.0053 64.3185 35.0053C63.5848 35.0053 62.8672 34.5132 62.3159 33.6035C61.7681 32.6997 61.4189 31.4306 61.4189 30.0115C61.4189 28.5925 61.7681 27.3233 62.3159 26.4196C62.8672 25.5099 63.5848 25.0177 64.3185 25.0177C65.0521 25.0177 65.7698 25.5099 66.3211 26.4196C66.8688 27.3233 67.2181 28.5925 67.2181 30.0115Z" fill="white" stroke="#0F172A" stroke-width="0.64436"/>
                <path d="M67.218 30.0114C67.218 30.8954 66.9955 31.6804 66.6528 32.2339C66.3071 32.7924 65.8716 33.0721 65.446 33.0721C65.0204 33.0721 64.5848 32.7924 64.2391 32.2339C63.8964 31.6804 63.674 30.8954 63.674 30.0114C63.674 29.1274 63.8964 28.3425 64.2391 27.7889C64.5848 27.2305 65.0204 26.9507 65.446 26.9507C65.8716 26.9507 66.3071 27.2305 66.6528 27.7889C66.9955 28.3425 67.218 29.1274 67.218 30.0114Z" fill="#0F172A" stroke="#0F172A" stroke-width="0.64436"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M164.488 26.3812C166.227 26.3695 167.632 24.9852 167.621 23.2966C167.609 21.5575 166.185 20.1523 164.446 20.164C162.757 20.1753 161.392 21.5993 161.404 23.3384C161.415 25.027 162.799 26.3925 164.488 26.3812Z" fill="#6500C3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M167.561 34.5705C167.264 33.5646 166.45 32.3681 164.262 32.3828C162.573 32.3942 161.205 33.7782 161.216 35.4668C161.227 37.0491 162.432 38.3493 163.989 38.4984L164.014 42.2505L164.491 41.9468C166.98 40.3664 168.184 36.6832 167.561 34.5705Z" fill="#6500C3"/>
                <path d="M104.33 29.6575C103.643 28.9368 102.787 28.5798 101.763 28.5867C100.398 28.5959 99.4079 28.9439 98.7938 29.6307C98.1797 30.3175 97.8764 31.2049 97.8837 32.2929C97.8904 33.2955 98.1732 34.1043 98.732 34.7193C99.2908 35.3342 100.168 35.6376 101.362 35.6296C101.938 35.6257 102.492 35.5047 103.024 35.2664C103.556 35.0282 104.001 34.6945 104.361 34.2654L104.33 29.6575ZM94.0448 32.4787C94.0358 31.1347 94.2834 29.8851 94.7877 28.7296C95.2919 27.5742 96.0109 26.6307 96.9447 25.8991C97.8996 25.146 99.0061 24.7118 100.264 24.5967C100.904 24.5498 101.587 24.6838 102.315 24.9989C103.063 25.2926 103.728 25.7255 104.308 26.2976L104.265 19.9617L108.645 19.4202L108.767 37.4678C108.77 38.0012 108.581 38.4611 108.2 38.8477C107.819 39.2556 107.351 39.4614 106.796 39.4651L104.396 39.4813L104.384 37.6253C103.897 38.2259 103.292 38.7207 102.57 39.1095C101.868 39.4983 101.166 39.695 100.462 39.6997C99.2029 39.7082 98.0807 39.3851 97.095 38.7304C96.1307 38.0968 95.3782 37.2379 94.8376 36.1535C94.3181 35.0476 94.0539 33.8227 94.0448 32.4787ZM118.066 27.9331C117.106 27.9396 116.298 28.3183 115.641 29.0694C115.006 29.8204 114.693 30.8252 114.702 32.0838C114.709 33.2358 114.982 34.13 115.52 34.7664C116.079 35.4026 116.785 35.7179 117.638 35.7121C118.598 35.7057 119.396 35.3377 120.031 34.608C120.666 33.8784 120.979 32.8736 120.971 31.5936C120.963 30.4203 120.679 29.5156 120.12 28.8793C119.583 28.2429 118.898 27.9275 118.066 27.9331ZM110.959 32.365C110.949 30.829 111.228 29.4724 111.796 28.2953C112.386 27.1179 113.19 26.1738 114.209 25.463C115.228 24.7521 116.388 24.2963 117.688 24.0956C118.114 24.0287 118.509 23.994 118.871 23.9916C120.109 23.9833 121.22 24.2531 122.205 24.8012C123.211 25.3491 124.006 26.1651 124.589 27.2492C125.173 28.3333 125.47 29.6647 125.48 31.2433C125.492 32.9713 125.15 34.4669 124.454 35.7303C123.78 36.9722 122.848 37.9172 121.657 38.5652C120.489 39.2344 119.2 39.5737 117.792 39.5832C116.491 39.592 115.326 39.3118 114.298 38.7427C113.271 38.1949 112.455 37.379 111.85 36.2951C111.267 35.211 110.97 33.9009 110.959 32.365ZM138.691 24.0503L138.778 37.042C138.782 37.6394 138.572 38.1528 138.149 38.5823C137.725 39.0332 137.204 39.2607 136.585 39.2648L134.665 39.2777L134.567 24.6861L138.691 24.0503ZM134.05 19.1534C134.044 18.3428 134.349 17.6047 134.963 16.9392C135.577 16.2738 136.279 15.9384 137.068 15.9331C137.666 15.929 138.158 16.1284 138.544 16.5311C138.952 16.9337 139.159 17.455 139.163 18.095C139.168 18.927 138.864 19.6651 138.25 20.3092C137.635 20.9534 136.923 21.2781 136.112 21.2836C135.536 21.2875 135.044 21.0881 134.636 20.6855C134.25 20.2828 134.054 19.7721 134.05 19.1534ZM153.338 38.1282C152.828 38.3663 151.966 38.6281 150.752 38.9136L149.985 39.1107C149.836 39.1544 149.569 39.1775 149.185 39.1801C148.716 39.1833 148.236 39.1225 147.744 38.9978C147.274 38.8729 146.867 38.6837 146.524 38.43C145.023 37.2667 144.243 35.4266 144.183 32.9096L144.157 28.9737L141.79 29.2136L141.768 25.9177L144.134 25.6458L144.102 20.8779L148.098 20.307L148.131 25.1389L153.247 24.4965L153.259 26.3844C153.263 26.8537 153.105 27.2601 152.788 27.6036C152.491 27.947 152.109 28.1415 151.64 28.1874L148.154 28.5628L148.18 32.3707C148.184 32.9894 148.284 33.554 148.479 34.0647C148.674 34.5541 148.943 34.9256 149.287 35.1793C149.394 35.2426 149.543 35.2736 149.735 35.2723C150.076 35.27 150.524 35.203 151.078 35.0713C151.653 34.9181 152.143 34.7761 152.547 34.6454L153.338 38.1282Z" fill="#6500C3"/>
                </g>
                <defs>
                <clipPath id="clip0_73_656">
                <rect width="151" height="40" fill="white" transform="translate(24 10)"/>
                </clipPath>
                </defs>
                </svg>

              </div>

              {/* 모바일 헤더 */}
              <div className="block sm:hidden w-full h-auto object-contain" w-full h-auto>
                <svg className="w-full h-auto" viewBox="0 0 375 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_73_703" fill="white">
                <path d="M0 0H375V60H0V0Z"/>
                </mask>
                <path d="M0 0H375V60H0V0Z" fill="white"/>
                <path d="M375 59H0V61H375V59Z" fill="#E2E8F0" mask="url(#path-1-inside-1_73_703)"/>
                <path d="M30 37.3901C33.8755 29.8648 40.427 17.6762 44.4871 20.2422C49.5622 23.4498 37.1052 33.319 43.103 37.3901C49.1009 41.4612 54.6373 16.5412 60.0815 20.2422C65.5258 23.9432 54.8219 33.6891 59.0665 37.3901C62.4622 40.3509 68.294 29.954 73 21.9763" stroke="#6500C3" stroke-width="15.8161" stroke-linecap="round"/>
                <path d="M53.8414 28.726C53.8414 30.145 53.4921 31.4142 52.9444 32.318C52.3931 33.2277 51.6754 33.7198 50.9418 33.7198C50.2081 33.7198 49.4905 33.2277 48.9391 32.318C48.3914 31.4142 48.0422 30.145 48.0422 28.726C48.0422 27.307 48.3914 26.0378 48.9391 25.134C49.4905 24.2243 50.2081 23.7322 50.9418 23.7322C51.6754 23.7322 52.3931 24.2243 52.9444 25.134C53.4921 26.0378 53.8414 27.307 53.8414 28.726Z" fill="white" stroke="#0F172A" stroke-width="0.64436"/>
                <path d="M53.8413 28.7259C53.8413 29.6099 53.6188 30.3949 53.2761 30.9484C52.9304 31.5069 52.4949 31.7866 52.0693 31.7866C51.6437 31.7866 51.2081 31.5069 50.8624 30.9484C50.5197 30.3949 50.2973 29.6099 50.2973 28.7259C50.2973 27.8419 50.5197 27.057 50.8624 26.5034C51.2081 25.9449 51.6437 25.6652 52.0693 25.6652C52.4949 25.6652 52.9304 25.9449 53.2761 26.5034C53.6188 27.057 53.8413 27.8419 53.8413 28.7259Z" fill="#0F172A" stroke="#0F172A" stroke-width="0.64436"/>
                <path d="M62.2181 28.726C62.2181 30.145 61.8688 31.4142 61.3211 32.318C60.7698 33.2277 60.0521 33.7198 59.3185 33.7198C58.5848 33.7198 57.8672 33.2277 57.3159 32.318C56.7681 31.4142 56.4189 30.145 56.4189 28.726C56.4189 27.307 56.7681 26.0378 57.3159 25.134C57.8672 24.2243 58.5848 23.7322 59.3185 23.7322C60.0521 23.7322 60.7698 24.2243 61.3211 25.134C61.8688 26.0378 62.2181 27.307 62.2181 28.726Z" fill="white" stroke="#0F172A" stroke-width="0.64436"/>
                <path d="M62.218 28.7259C62.218 29.6099 61.9955 30.3949 61.6528 30.9484C61.3071 31.5069 60.8716 31.7866 60.446 31.7866C60.0204 31.7866 59.5848 31.5069 59.2391 30.9484C58.8964 30.3949 58.674 29.6099 58.674 28.7259C58.674 27.8419 58.8964 27.057 59.2391 26.5034C59.5848 25.9449 60.0204 25.6652 60.446 25.6652C60.8716 25.6652 61.3071 25.9449 61.6528 26.5034C61.9955 27.057 62.218 27.8419 62.218 28.7259Z" fill="#0F172A" stroke="#0F172A" stroke-width="0.64436"/>
                </svg>

              </div>


            </div>
    
      );






}
      


    

export default Header;