// src/components/Services.js
import React from 'react';
import img1 from '../assets/img1.webp'

import philosophyEfficeny from '../assets/philosophy-efficeny.webp'
import philosophyFairPrices from '../assets/philosophy-fair-prices.webp'
import philosophyQuality from '../assets/philosophy-quality.webp'

const data = [
  {
    imgSrc: philosophyQuality,
    title: 'Quality',
    description: 'Everything we do centers on providing services of the highest level of quality. We won’t stop until we feel confident you’ve been provided our best service.'
  },
  {
    imgSrc: philosophyEfficeny,
    title: 'Efficiency',
    description: 'We pride ourselves on our efficient procedures and solutions, but we continually strive for improvement in order to deliver results more effectively.'
  },
  {
    imgSrc: philosophyFairPrices,
    title: 'Fair Prices',
    description: 'Satisfying customers is our top priority. That’s why we believe in offering fair and transparent prices with no hidden fees or extra charges. We shop around for you.'
  }
];

const offer = [
  {
    name: "Estate Planning",
    description: "Protect your valuable financial assets against the litigation and unfavorable taxation.",
    svg: <svg id="1629397964" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" class="svg u_1629397964" data-icon-custom="true" data-icon-name="icon-estate.svg" className="w-6 h-6" > <path d="m57 25.59 1.315.893c.167.113.362.173.562.173.062 0 .126-.006.188-.018.26-.05.49-.201.639-.421l2.246-3.311c.311-.457.191-1.079-.266-1.389l-29.122-19.761c-.34-.23-.783-.23-1.123 0l-29.124 19.762c-.457.31-.576.932-.266 1.389l2.246 3.311c.148.22.379.371.639.421.262.05.531-.007.75-.155l1.316-.894v10.005c-.586.256-1.065.729-1.316 1.351-1.681 4.156-3.684 9.618-3.684 12.054 0 3.59 2.09 6.378 5 6.903v4.097h-5v2h60v-2h-5zm-51.611-1.323-1.123-1.657 27.734-18.819 27.734 18.819-1.123 1.656-26.049-17.676c-.17-.115-.366-.173-.562-.173s-.392.058-.562.173zm-1.389 24.733c0-1.625 1.289-5.745 3.537-11.304.115-.283.362-.313.463-.313s.348.03.463.313c2.248 5.559 3.537 9.679 3.537 11.304 0 2.897-1.683 5-4 5s-4-2.103-4-5zm5 6.903c2.91-.525 5-3.313 5-6.903 0-2.436-2.003-7.898-3.684-12.054-.251-.622-.73-1.095-1.316-1.351v-11.362l23-15.607 23 15.607v19.465l-.168-.252c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.163-.168.357-.168.554v2h-2v-2c0-.197-.059-.391-.168-.555l-2-3c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.164-.168.358-.168.555v2h-2v-2c0-.197-.059-.391-.168-.555l-2-3c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.164-.168.358-.168.555v13h-6v-19c0-.553-.447-1-1-1h-11c-.553 0-1 .447-1 1v19h-7zm30 4.097h-2v-12.697l1-1.5 1 1.5zm2-9h2v2h-2zm0 4h2v5h-2zm6 5h-2v-12.697l1-1.5 1 1.5zm2-9h2v2h-2zm0 4h2v5h-2zm-22 5h-9v-18h9zm26 0v-12.697l1-1.5 1 1.5v12.697z"></path>
      <path d="m29 33h6c2.206 0 4-1.794 4-4v-6c0-2.206-1.794-4-4-4h-6c-2.206 0-4 1.794-4 4v6c0 2.206 1.794 4 4 4zm-2-4v-2h4v4h-2c-1.103 0-2-.897-2-2zm8 2h-2v-4h4v2c0 1.103-.897 2-2 2zm2-8v2h-4v-4h2c1.103 0 2 .897 2 2zm-8-2h2v4h-4v-2c0-1.103.897-2 2-2z"></path>
      <path d="m23 50h2v2h-2z"></path>
    </svg>
  },
  {
    name: "Retirement Planning",
    description: "Take care of your money now so you won’t have to later.",
    svg: <svg id="1679596456" enable-background="new 0 0 512.079 512.079" height="512" viewBox="0 0 512.079 512.079" width="512" xmlns="http://www.w3.org/2000/svg" class="svg u_1679596456" data-icon-custom="true" data-icon-name="icon-Retirement-1.svg" className="w-6 h-6" > <g> <path d="m512.079 428.261-20.207-22.173c-7.941 7.237-24.996 21.126-51.931 35.069l-51.156-103.109c15.738-12.393 21.283-34.236 13.395-52.908-9.196-21.771-33.745-32.765-55.881-25.03-32.725 11.433-62.648 17.005-88.901 16.571-29.738-.531-52.166-8.529-70.58-25.169-16.637-15.032-40.402-16.46-57.792-3.473-4.828 3.605-8.817 8.07-11.83 13.106-7.747-11.747-14.706-24.846-20.851-39.272-23.413-54.968-35.284-129.604-35.284-221.833h-30c0 96.292 12.679 174.883 37.685 233.591 14.152 33.225 34.508 65.163 62.427 88.725l-56.75 114.326c-27.274-13.903-46.792-27.43-56.468-34.659l-17.955 24.033c27.001 20.171 125.266 85.984 256.061 85.984 117.993 0 206.678-38.813 256.018-83.779zm-365.102-156.184c5.756-4.298 13.868-3.6 19.728 1.695 23.773 21.482 53.264 32.245 90.176 32.905 29.822.5 63.238-5.642 99.313-18.245 7.236-2.527 15.298 1.154 18.352 8.384 3.287 7.781-.352 17.097-8.463 19.925-31.154 10.862-68.213 19.872-105.449 19.87-44.294-.002-84.654-12.627-116.959-43.463-4.826-5.891-3.717-15.829 3.302-21.071zm8.952 67.876c31.896 18.919 67.812 26.775 104.596 26.775 31.057 0 64.754-5.587 100.669-16.788l51.469 103.74c-38.232 15.486-90.032 28.359-156.604 28.359-60.405 0-113.366-15.128-154.454-32.65z"></path>
    </g>
    </svg>
  },
  {
    name: "Lifetime Income Planning",
    description: "When people do not have pension-like income, guaranteed lifetime income planning is imperative.",
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512" id="1915143820" class="svg u_1915143820" data-icon-custom="true" data-icon-name="icon-income.svg" className="w-6 h-6" > <g id="financail-money-payment-pay-hand"> <path d="M61,17H60V13a1,1,0,0,0-1.13-.99l-.87.11V8a.985.985,0,0,0-.39-.79,1.015,1.015,0,0,0-.86-.18L20.07,16.44,23.8,9.98a5.067,5.067,0,0,0,.66-2.49,5,5,0,0,0-9.33-2.51L2.68,26.56A4.973,4.973,0,0,0,2,29.07V41.44a4.924,4.924,0,0,0,.19,1.37L5.38,54H5a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V55a1,1,0,0,0-1-1V51.49a7,7,0,0,0-2.05-4.96L23.41,45H61a1,1,0,0,0,1-1V18A1,1,0,0,0,61,17Zm-3-2.86V17H36.27ZM56,9.29v3.1L31.19,15.65ZM26,60H6V56H26ZM20.08,44.38a.914.914,0,0,0,.22.32l-.01.01,3.24,3.24A4.945,4.945,0,0,1,25,51.49V54H7.46L4.11,42.27A3.318,3.318,0,0,1,4,41.44V29.07a2.916,2.916,0,0,1,.41-1.5L16.87,5.98a2.975,2.975,0,0,1,4.09-1.09,2.95,2.95,0,0,1,1.5,2.6,3,3,0,0,1-.4,1.49L17.43,17H15a1,1,0,0,0-1,1V39a1.016,1.016,0,0,0,.62.93,1,1,0,0,0,1.1-.24l8.82-9.12a3.007,3.007,0,0,1,5.07,1.55c.02.2.04.4.05.56a3.065,3.065,0,0,1-.88,2.12l-8.49,8.49A1,1,0,0,0,20.08,44.38ZM60,43H23.41l6.35-6.34A9.9,9.9,0,0,0,38,41a10,10,0,1,0-9.54-12.97,5.033,5.033,0,0,0-5.35,1.14L16,36.53V19H60ZM31.58,31.8a5.026,5.026,0,0,0-1.36-2.62,8.023,8.023,0,1,1,.86,5.79,5.377,5.377,0,0,0,.58-2.32C31.65,32.38,31.62,32.12,31.58,31.8Z"></path>
      <path d="M38,34a1,1,0,0,1-1-1H35a3,3,0,0,0,2,2.816V37h2V35.816A2.993,2.993,0,0,0,38,30a1,1,0,1,1,1-1h2a3,3,0,0,0-2-2.816V25H37v1.184A2.993,2.993,0,0,0,38,32a1,1,0,0,1,0,2Z"></path>
      <path d="M20,24.873A4.014,4.014,0,0,0,22.873,22H25V20H22a1,1,0,0,0-1,1,2,2,0,0,1-2,2,1,1,0,0,0-1,1v3h2Z"></path>
      <path d="M56,25.873V28h2V25a1,1,0,0,0-1-1,2,2,0,0,1-2-2,1,1,0,0,0-1-1H51v2h2.127A4.014,4.014,0,0,0,56,25.873Z"></path>
      <path d="M55,40a2,2,0,0,1,2-2,1,1,0,0,0,1-1V34H56v2.127A4.014,4.014,0,0,0,53.127,39H51v2h3A1,1,0,0,0,55,40Z"></path>
    </g>
    </svg>
  },
  {
    name: "IRA / 401K Rollover",
    description: "Keeping the tax deferred account in check is important. Know your rollover options well before you take an action.",
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512" id="1932683972" class="svg u_1932683972" data-icon-custom="true" data-icon-name="icon-401k.svg" className="w-6 h-6"  > <g id="Layer_9" data-name="Layer 9"> <path d="M51.6,8H54V6H49a1,1,0,0,0-1,1v5h2V9.28A29,29,0,0,1,18.47,57.66l-.94,1.76A31,31,0,0,0,51.6,8Z"></path>
      <path d="M14,54.73A29,29,0,0,1,45.53,6.34l.94-1.76A31,31,0,0,0,12.4,56H10v2h5a1,1,0,0,0,1-1V52H14Z"></path>
      <path d="M9,32A23,23,0,1,0,32,9,23,23,0,0,0,9,32Zm44,0A21,21,0,1,1,32,11,21,21,0,0,1,53,32Z"></path>
      <path d="M13,32A19,19,0,1,0,32,13,19,19,0,0,0,13,32Zm29.71-9.29,2-2A16.92,16.92,0,0,1,49,31H46v2h3a16.92,16.92,0,0,1-4.26,10.27l-2-2-1.42,1.42,2,2A16.92,16.92,0,0,1,33,49V46H31v3a16.92,16.92,0,0,1-10.27-4.26l2-2-1.42-1.42-2,2A16.92,16.92,0,0,1,15.05,33H18V31H15.05a16.92,16.92,0,0,1,4.26-10.27l2,2,1.42-1.42-2-2A16.92,16.92,0,0,1,31,15.05V18h2V15.05a16.92,16.92,0,0,1,10.27,4.26l-2,2Z"></path>
      <path d="M33,20H31V32a1,1,0,0,0,.29.71l6,6,1.42-1.42L33,31.59Z"></path>
    </g>
    </svg>
  },
  {
    name: "Annuities",
    description: "Another way to earn lifetime income after Pension and Social Security income.",
    svg: <svg id="1478893792" enable-background="new 0 0 511.996 511.996" height="512" viewBox="0 0 511.996 511.996" width="512" xmlns="http://www.w3.org/2000/svg" class="svg u_1478893792" data-icon-custom="true" data-icon-name="icon-Annuties.svg" className="w-6 h-6" > <g> <path d="m255.279 323.704c4.143 0 7.5-3.358 7.5-7.5v-6.797c18.281-2.924 29.42-16.017 31.225-28.927 2.056-14.707-7.421-27.355-24.144-32.223-10.979-3.196-23.158-7.082-30.256-11.666-3.903-2.521-3.675-6.69-3.396-8.366.694-4.165 4.079-9.27 11.497-11.11 2.673-.663 5.18-1.004 7.51-1.119.021 0 .042.003.063.003.26 0 .516-.013.769-.039 10.912-.294 17.648 4.425 18.088 4.743 3.296 2.462 7.966 1.807 10.458-1.474 2.505-3.299 1.862-8.003-1.437-10.509-.447-.34-8.032-5.962-20.379-7.419v-5.507c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v5.986c-1.206.214-2.432.466-3.685.777-11.922 2.958-20.825 12.065-22.682 23.203-1.572 9.433 2.279 18.411 10.053 23.432 7.028 4.541 16.937 8.442 34.201 13.469 9.576 2.788 14.49 8.526 13.481 15.744-1.146 8.197-9.728 16.536-23.911 16.614-11.787.071-16.438-.368-26.455-5.765-3.649-1.966-8.196-.602-10.16 3.045-1.965 3.646-.602 8.195 3.045 10.16 10.271 5.533 16.978 7.092 26.112 7.46v6.287c.003 4.14 3.36 7.498 7.503 7.498z"></path>
      <path d="m505.77 314.144c-.021-4.006-3.186-7.289-7.188-7.455l-58.214-2.422-44.635-5.736c-19.655-2.525-39.683-1.79-59.1 2.064 1.626-2.937 3.111-5.956 4.415-9.073 1.599-3.821-.203-8.215-4.024-9.813-3.824-1.598-8.215.203-9.813 4.024-3.175 7.591-7.524 14.562-12.91 20.768-1.867.624-3.725 1.272-5.571 1.957l-5.927 2.197c-8.417 3.12-14.704 9.36-18.024 16.928-9.147 3.68-18.808 5.562-28.777 5.562-42.539 0-77.147-34.608-77.147-77.147 0-18.647 6.697-36.503 18.865-50.515 1.859-.621 3.712-1.261 5.55-1.943l5.928-2.199c8.409-3.117 14.693-9.351 18.014-16.914 9.149-3.691 18.814-5.579 28.789-5.579 42.541 0 77.15 34.609 77.15 77.15 0 1.314-.03 2.57-.091 3.733-.214 4.137 2.967 7.664 7.104 7.877.132.006.263.01.393.01 3.965 0 7.277-3.108 7.484-7.113.073-1.42.11-2.936.11-4.507 0-50.812-41.339-92.15-92.15-92.15-9.043 0-17.879 1.288-26.396 3.838-.268-2.054-.742-4.115-1.431-6.159-1.968-5.797-5.536-10.869-10.34-14.68-4.81-3.791-10.565-6.099-16.644-6.676l-29.502-2.8 11.287-8.606 69.625-.113c.161.002.319.004.479.004 13.307 0 25.042-8.407 29.617-20.496l.744-.001c14.862.247 27.772-9.93 31.234-24.082 9.844-4.279 17.205-13.423 18.771-24.638.202-1.427.305-2.912.305-4.413 0-13.827-8.849-25.941-22.018-30.145l-71.568-22.857c-9.7-3.104-20.211-2.626-29.6 1.346l-69.16 29.28c-3.814 1.615-5.598 6.017-3.982 9.831 1.615 3.816 6.02 5.598 9.83 3.983l69.158-29.28c6.087-2.575 12.897-2.885 19.186-.873l71.572 22.86c6.927 2.21 11.58 8.582 11.58 15.855 0 .811-.051 1.566-.158 2.323-1.149 8.231-8.211 14.351-16.495 14.351-.101 0-.202-.001-.303-.003l-64.54-1.15c-1.686-.024-3.338.511-4.682 1.535l-85.22 64.98c-2.455 1.872-3.512 5.057-2.663 8.025.849 2.969 3.429 5.114 6.502 5.405l48.58 4.61c3.202.304 6.236 1.522 8.757 3.509 2.521 1.999 4.401 4.674 5.437 7.723 2.9 8.592-1.483 17.79-9.983 20.939l-5.928 2.199c-25.397 9.413-53.019 12.563-79.878 9.114l-38.44-4.943-.282-53.833-.333-64.499 40.563-17.169c3.814-1.615 5.598-6.016 3.983-9.83-1.615-3.815-6.02-5.596-9.831-3.983l-43.608 18.46-56.86-2.365c-2.057-.088-4.043.672-5.518 2.095-1.476 1.423-2.305 3.388-2.294 5.438l.671 129.895c.021 4.006 3.186 7.289 7.188 7.455l58.225 2.423 44.622 5.738c7.698.989 15.453 1.48 23.207 1.48 12.035 0 24.065-1.188 35.869-3.53-7.487 13.528-11.487 28.821-11.487 44.581 0 50.81 41.337 92.147 92.147 92.147 9.04 0 17.876-1.285 26.392-3.831.269 2.048.741 4.104 1.429 6.141 3.99 11.807 14.586 20.196 26.992 21.372l29.495 2.795-11.288 8.608-69.622.113c-13.542-.219-25.477 8.255-30.099 20.492l-.742.001c-.169-.003-.338-.004-.507-.004-14.656 0-27.296 10.089-30.723 24.069-9.861 4.276-17.213 13.433-18.782 24.67-2.14 15.311 6.996 29.838 21.723 34.542l71.568 22.862c4.225 1.349 8.601 2.02 12.971 2.02 5.669 0 11.328-1.129 16.625-3.372l140.343-59.418 56.854 2.365c.104.004.208.006.312.006 1.938 0 3.806-.75 5.206-2.101 1.476-1.423 2.305-3.388 2.294-5.438zm-252.986-200.49c-.048-.001-.099-.007-.144-.001l-49.955.081 7.157-5.457 55.527-.088c-3.143 3.434-7.673 5.547-12.585 5.465zm-13.192-28.061 57.543 1.026c-3.133 4.064-8.074 6.616-13.501 6.542-.05-.001-.102-.001-.149-.001l-53.928.085zm-218.404 105.024-.594-114.879 43.531 1.81.372 71.001.227 43.878zm237.731 207.721c.098 0 .195.001.293.003.048 0 .093-.002.144.001l49.954-.081-7.156 5.457-55.538.088c3.077-3.369 7.489-5.468 12.303-5.468zm-30.866 20.493c.103 0 .206.001.309.002.05.001.098-.001.149.001l53.932-.085-10.038 7.655-57.558-1.032c3.068-3.999 7.88-6.541 13.206-6.541zm67.532 75.979c-6.081 2.575-12.894 2.886-19.184.876l-71.568-22.862c-7.75-2.475-12.558-10.12-11.432-18.178 1.15-8.234 8.214-14.356 16.499-14.356.101 0 .201.001.302.003l64.542 1.157c1.666.018 3.339-.511 4.683-1.535l85.216-64.987c2.455-1.873 3.512-5.058 2.663-8.026s-3.43-5.113-6.503-5.404l-48.574-4.604c-6.525-.618-12.099-5.031-14.197-11.241-2.901-8.587 1.483-17.783 9.982-20.934l5.927-2.197c25.396-9.413 53.019-12.563 79.88-9.112l38.446 4.94.611 118.335zm152.281-60.364-.593-114.879 43.535 1.811.594 114.878z"></path>
    </g>
    </svg>
  },
  {
    name: "Life Insurance",
    description: "Transfer the financial responsibility from your shoulders to the life insurance company.",
    svg: <svg xmlns="http://www.w3.org/2000/svg" id="1225095051" viewBox="0 0 512 512" width="512" height="512" class="svg u_1225095051" data-icon-custom="true" data-icon-name="icon-life issurance-1.svg" className="w-6 h-6"> <path d="M491.062,248.609a8,8,0,0,0-8.719,1.734L469.088,263.6a55.63,55.63,0,0,1-39.6,16.4h-2.176l-40.3-40.3a323.337,323.337,0,0,0,36.854-52.49A91.737,91.737,0,0,0,396.358,67.057L387.2,80.18a75.735,75.735,0,0,1,22.723,99.189,307.471,307.471,0,0,1-34.244,49l-34.025-34.025a8,8,0,0,0-11.314,0,41.989,41.989,0,0,0,0,59.314L332.687,256H240a23.992,23.992,0,0,0-22.624,32H187.314l2.343-2.343a41.989,41.989,0,0,0,0-59.314,8,8,0,0,0-11.314,0L155.69,249a306.358,306.358,0,0,1-53.616-69.628A75.64,75.64,0,0,1,221.485,88.8l28.858,28.858a8,8,0,0,0,11.314,0L290.515,88.8a75.54,75.54,0,0,1,81.952-16.616l6.014-14.827A91.508,91.508,0,0,0,279.2,77.486l-23.2,23.2-23.2-23.2A91.64,91.64,0,0,0,88.129,187.213a322.334,322.334,0,0,0,56.247,73.1L92.687,312H85.823a63.578,63.578,0,0,1-45.255-18.746L29.656,282.343A8,8,0,0,0,16,288v48a80.1,80.1,0,0,0,76.741,79.935A62.177,62.177,0,0,0,134.627,432H264a23.992,23.992,0,0,0,22.624-32h98.749a62.18,62.18,0,0,0,41.895-16.073A72.092,72.092,0,0,0,496,312V256A8,8,0,0,0,491.062,248.609ZM200,384v16h64a8,8,0,0,1,0,16H134.627a46.326,46.326,0,0,1-32.971-13.657A8,8,0,0,0,96,400a64.072,64.072,0,0,1-64-64V307.189A79.413,79.413,0,0,0,85.823,328H96a8,8,0,0,0,5.657-2.343l81.451-81.451a25.988,25.988,0,0,1-4.765,30.137l-16,16A8,8,0,0,0,168,304H280a8,8,0,0,1,0,16H200v16h88a8,8,0,0,1,0,16H200v16h88a8,8,0,0,1,0,16Zm280-72a56.063,56.063,0,0,1-56,56,8,8,0,0,0-5.656,2.343A46.326,46.326,0,0,1,385.373,384H310.624a23.943,23.943,0,0,0-4.755-24,23.96,23.96,0,0,0-4.969-36.223A23.93,23.93,0,0,0,302.624,304H320V288H240a8,8,0,0,1,0-16H352a8,8,0,0,0,5.657-13.657l-16-16a25.986,25.986,0,0,1-4.764-30.137l81.45,81.451A8,8,0,0,0,424,296h5.49A71.519,71.519,0,0,0,480,275.311Z"></path>
      <path d="M240,232h32a8,8,0,0,0,8-8V208h16a8,8,0,0,0,8-8V168a8,8,0,0,0-8-8H280V144a8,8,0,0,0-8-8H240a8,8,0,0,0-8,8v16H216a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h16v16A8,8,0,0,0,240,232Zm-16-40V176h16a8,8,0,0,0,8-8V152h16v16a8,8,0,0,0,8,8h16v16H272a8,8,0,0,0-8,8v16H248V200a8,8,0,0,0-8-8Z"></path>
    </svg>
  },
  {
    name: "Debt Management",
    description: "Debt is like a hole in a bucket. The sooner you fix it, the better it is.",
    svg: <svg id="1114271509" enable-background="new 0 0 512.167 512.167" height="512" viewBox="0 0 512.167 512.167" width="512" xmlns="http://www.w3.org/2000/svg" class="svg u_1114271509" data-icon-custom="true" data-icon-name="icon-debt.svg" className="w-6 h-6"> <g id="XMLID_1039_"> <g id="XMLID_393_"> <path id="XMLID_868_" d="m172.96 393.374c-2.63 0-5.21 1.06-7.07 2.93-1.859 1.86-2.93 4.43-2.93 7.07 0 2.63 1.07 5.21 2.93 7.07s4.44 2.93 7.07 2.93 5.21-1.07 7.07-2.93c1.859-1.86 2.93-4.44 2.93-7.07 0-2.64-1.07-5.21-2.93-7.07-1.86-1.871-4.44-2.93-7.07-2.93z"></path>
      <path id="XMLID_872_" d="m264.315 328.208c0-5.523-4.478-10-10-10h-111.67c-5.522 0-10 4.477-10 10s4.478 10 10 10h111.67c5.523 0 10-4.477 10-10z"></path>
      <path id="XMLID_891_" d="m130.997 226.208h134.967c5.522 0 10-4.477 10-10s-4.478-10-10-10h-134.967c-5.522 0-10 4.477-10 10s4.478 10 10 10z"></path>
      <path id="XMLID_913_" d="m195.461 148.137c-7.262 0-13.169-4.947-13.169-11.027 0-5.523-4.478-10-10-10s-10 4.477-10 10c0 13.849 9.752 25.605 23.169 29.583v1.39c0 5.523 4.478 10 10 10s10-4.477 10-10v-1.39c13.417-3.977 23.169-15.733 23.169-29.583 0-17.108-14.88-31.027-33.169-31.027-7.262 0-13.169-4.947-13.169-11.027s5.907-11.027 13.169-11.027 13.169 4.947 13.169 11.027c0 5.523 4.478 10 10 10s10-4.477 10-10c0-13.849-9.752-25.605-23.169-29.583v-1.39c0-5.523-4.478-10-10-10s-10 4.477-10 10v1.39c-13.417 3.977-23.169 15.733-23.169 29.583 0 17.108 14.88 31.027 33.169 31.027 7.262 0 13.169 4.947 13.169 11.027s-5.907 11.027-13.169 11.027z"></path>
      <path id="XMLID_1103_" d="m496.166 308.961-15.601 11.205c-23.41 16.814-51.02 25.702-79.843 25.702h-34.785c-8.28 0-15.018-6.737-15.018-15.017 0-8.281 6.737-15.018 15.018-15.018h17c29.145 0 52.963-23.185 54.012-52.078l43.689-75.672h21.528c5.522 0 10-4.477 10-10s-4.478-10-10-10h-9.981l18.641-32.288c1.326-2.297 1.686-5.026.999-7.588s-2.362-4.746-4.659-6.072l-38.105-22c-4.784-2.761-10.899-1.122-13.66 3.66l-37.116 64.288h-9.445c-5.007 0-9.961.343-14.84 1.003v-159.003c0-5.523-4.478-10-10-10h-374c-5.522 0-10 4.477-10 10v492c0 5.523 4.478 10 10 10h374c5.522 0 10-4.477 10-10v-136.215h6.723c33.035 0 64.679-10.186 91.511-29.458l15.601-11.205c4.485-3.222 5.51-9.47 2.288-13.956-3.222-4.484-9.469-5.511-13.957-2.288zm-140.394 55.397-.079.137-23.947 17.479 3.164-29.479 1.579-2.735c4.45 6.909 11.258 12.159 19.283 14.598zm111.95-241.902 20.785 12-91.376 158.267c-4.324 1.991-9.129 3.11-14.193 3.11h-15.315zm-113.3 156.242c-.001.003-.003.005-.005.007l-25.895 44.851c-1.646 2.85-4.325 4.787-7.547 5.456-3.22.669-6.452-.042-9.096-2.002-3.707-2.749-5.383-7.417-4.268-11.896l14.798-59.472c3.921-15.758 12.075-30.143 23.581-41.601 16.302-16.235 37.795-25.369 60.717-25.905zm-334.422 213.385v-472h354v153.664c-15.682 5.269-30.062 14.112-42.122 26.122-14.089 14.031-24.074 31.646-28.876 50.943l-2.835 11.396h-210.873c-5.522 0-10 4.477-10 10s4.478 10 10 10h205.896l-6.986 28.075c-3.072 12.345 1.546 25.217 11.766 32.793 4.49 3.329 9.748 5.339 15.196 5.951l-4.759 44.343h-92.446c-5.522 0-10 4.477-10 10s4.478 10 10 10h101.431c2.077 0 4.148-.647 5.896-1.923l43.904-32.044c1.126-.822 2.067-1.871 2.765-3.078l2.044-3.54v119.297h-354.001z"></path>
    </g>
    </g>
    </svg>
  },
  {
    name: "Mortgage Protection",
    description: "Provision your mortgage to be paid off in case the mortgage holder passes away.",
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="512" width="512" id="1756025483" class="svg u_1756025483" data-icon-name="business_office_building" className="w-6 h-6" > <path d="M69.36,79.4H30.64a1.14,1.14,0,0,1-1.14-1.14v-54a1.14,1.14,0,0,1,1.14-1.14H69.36a1.14,1.14,0,0,1,1.14,1.14v54A1.14,1.14,0,0,1,69.36,79.4ZM31.77,77.13H68.23V25.38H31.77Z"></path>
      <path d="M84,86.39H16a1.14,1.14,0,0,1-1.14-1.14v-7A1.14,1.14,0,0,1,16,77.13H84a1.14,1.14,0,0,1,1.14,1.14v7A1.14,1.14,0,0,1,84,86.39ZM17.1,84.12H82.9V79.4H17.1Z"></path>
      <path d="M21.3,79.4a1.14,1.14,0,0,1-1.14-1.14V73.58a1.14,1.14,0,1,1,2.27,0v4.68A1.14,1.14,0,0,1,21.3,79.4Z"></path>
      <path d="M21.3,74.72c-3,0-5.33-3.6-5.33-8.2s2.34-8.2,5.33-8.2,5.33,3.6,5.33,8.2S24.29,74.72,21.3,74.72Zm0-14.13c-1.45,0-3.06,2.43-3.06,5.93s1.61,5.93,3.06,5.93,3.06-2.43,3.06-5.93S22.75,60.59,21.3,60.59Z"></path>
      <path d="M78.7,79.4a1.14,1.14,0,0,1-1.14-1.14V73.58a1.14,1.14,0,1,1,2.27,0v4.68A1.14,1.14,0,0,1,78.7,79.4Z"></path>
      <path d="M78.7,74.72c-3,0-5.33-3.6-5.33-8.2s2.34-8.2,5.33-8.2S84,61.92,84,66.52,81.69,74.72,78.7,74.72Zm0-14.13c-1.45,0-3.06,2.43-3.06,5.93s1.61,5.93,3.06,5.93,3.06-2.43,3.06-5.93S80.15,60.59,78.7,60.59Z"></path>
      <path d="M36.37,33.59a1.14,1.14,0,0,1-1.14-1.14V29.08a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,36.37,33.59Z"></path>
      <path d="M43.19,33.59A1.14,1.14,0,0,1,42,32.46V29.08a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,43.19,33.59Z"></path>
      <path d="M50,33.59a1.14,1.14,0,0,1-1.14-1.14V29.08a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,50,33.59Z"></path>
      <path d="M56.81,33.59a1.14,1.14,0,0,1-1.14-1.14V29.08a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,56.81,33.59Z"></path>
      <path d="M63.63,33.59a1.14,1.14,0,0,1-1.14-1.14V29.08a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,63.63,33.59Z"></path>
      <path d="M36.37,43.44a1.14,1.14,0,0,1-1.14-1.14V38.93a1.14,1.14,0,1,1,2.27,0V42.3A1.14,1.14,0,0,1,36.37,43.44Z"></path>
      <path d="M43.19,43.44A1.14,1.14,0,0,1,42,42.3V38.93a1.14,1.14,0,1,1,2.27,0V42.3A1.14,1.14,0,0,1,43.19,43.44Z"></path>
      <path d="M50,43.44a1.14,1.14,0,0,1-1.14-1.14V38.93a1.14,1.14,0,1,1,2.27,0V42.3A1.14,1.14,0,0,1,50,43.44Z"></path>
      <path d="M56.81,43.44a1.14,1.14,0,0,1-1.14-1.14V38.93a1.14,1.14,0,1,1,2.27,0V42.3A1.14,1.14,0,0,1,56.81,43.44Z"></path>
      <path d="M63.63,43.44a1.14,1.14,0,0,1-1.14-1.14V38.93a1.14,1.14,0,1,1,2.27,0V42.3A1.14,1.14,0,0,1,63.63,43.44Z"></path>
      <path d="M36.37,53.29a1.14,1.14,0,0,1-1.14-1.14V48.78a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,36.37,53.29Z"></path>
      <path d="M43.19,53.29A1.14,1.14,0,0,1,42,52.15V48.78a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,43.19,53.29Z"></path>
      <path d="M50,53.29a1.14,1.14,0,0,1-1.14-1.14V48.78a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,50,53.29Z"></path>
      <path d="M56.81,53.29a1.14,1.14,0,0,1-1.14-1.14V48.78a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,56.81,53.29Z"></path>
      <path d="M63.63,53.29a1.14,1.14,0,0,1-1.14-1.14V48.78a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,63.63,53.29Z"></path>
      <path d="M36.37,63.13A1.14,1.14,0,0,1,35.24,62V58.62a1.14,1.14,0,1,1,2.27,0V62A1.14,1.14,0,0,1,36.37,63.13Z"></path>
      <path d="M43.19,63.13A1.14,1.14,0,0,1,42,62V58.62a1.14,1.14,0,1,1,2.27,0V62A1.14,1.14,0,0,1,43.19,63.13Z"></path>
      <path d="M50,63.13A1.14,1.14,0,0,1,48.86,62V58.62a1.14,1.14,0,1,1,2.27,0V62A1.14,1.14,0,0,1,50,63.13Z"></path>
      <path d="M56.81,63.13A1.14,1.14,0,0,1,55.68,62V58.62a1.14,1.14,0,1,1,2.27,0V62A1.14,1.14,0,0,1,56.81,63.13Z"></path>
      <path d="M63.63,63.13A1.14,1.14,0,0,1,62.49,62V58.62a1.14,1.14,0,1,1,2.27,0V62A1.14,1.14,0,0,1,63.63,63.13Z"></path>
      <path d="M36.37,73a1.14,1.14,0,0,1-1.14-1.14V68.47a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,36.37,73Z"></path>
      <path d="M63.63,73a1.14,1.14,0,0,1-1.14-1.14V68.47a1.14,1.14,0,1,1,2.27,0v3.37A1.14,1.14,0,0,1,63.63,73Z"></path>
      <path d="M57.85,79.4H42.15A1.14,1.14,0,0,1,41,78.27V66.52a1.14,1.14,0,0,1,1.14-1.14h15.7A1.14,1.14,0,0,1,59,66.52V78.27A1.14,1.14,0,0,1,57.85,79.4ZM43.29,77.13H56.71V67.66H43.29Z"></path>
      <path d="M50,79.4H42.15A1.14,1.14,0,0,1,41,78.27V66.52a1.14,1.14,0,0,1,1.14-1.14H50a1.14,1.14,0,0,1,1.14,1.14V78.27A1.14,1.14,0,0,1,50,79.4Zm-6.71-2.27h5.57V67.66H43.29Z"></path>
      <path d="M36.46,21.47a1.14,1.14,0,0,1-.53-.13l-1.29-.68-1.29.68a1.14,1.14,0,0,1-1.65-1.2l.25-1.43-1-1a1.14,1.14,0,0,1,.63-1.94L33,15.54l.64-1.3a1.14,1.14,0,0,1,2,0l.64,1.3,1.44.21a1.14,1.14,0,0,1,.63,1.94l-1,1,.25,1.43a1.14,1.14,0,0,1-1.12,1.33ZM34.1,17.66a1.14,1.14,0,0,1,.21.63,1.14,1.14,0,0,1,.67,0,1.14,1.14,0,0,1,.21-.63,1.14,1.14,0,0,1-.54-.39A1.14,1.14,0,0,1,34.1,17.66Z"></path>
      <path d="M40.5,21.47a1.14,1.14,0,0,1-1.12-1.33l.25-1.43-1-1a1.14,1.14,0,0,1,.63-1.94l1.44-.21.64-1.3a1.14,1.14,0,0,1,2,0l.64,1.3,1.44.21a1.14,1.14,0,0,1,.63,1.94l-1,1,.25,1.43a1.14,1.14,0,0,1-1.65,1.2l-1.29-.68L41,21.34A1.14,1.14,0,0,1,40.5,21.47Zm1.82-3.23a1.14,1.14,0,0,1,.33,0,1.14,1.14,0,0,1,.21-.63,1.14,1.14,0,0,1-.54-.39,1.14,1.14,0,0,1-.54.39,1.14,1.14,0,0,1,.21.63A1.14,1.14,0,0,1,42.32,18.24Z"></path>
      <path d="M51.82,21.47a1.13,1.13,0,0,1-.53-.13L50,20.66l-1.29.68a1.14,1.14,0,0,1-1.65-1.2l.25-1.43-1-1a1.14,1.14,0,0,1,.63-1.94l1.44-.21.64-1.3a1.14,1.14,0,0,1,2,0l.64,1.3,1.44.21a1.14,1.14,0,0,1,.63,1.94l-1,1,.25,1.43a1.14,1.14,0,0,1-1.12,1.33ZM50,18.24a1.14,1.14,0,0,1,.33,0,1.14,1.14,0,0,1,.21-.63,1.14,1.14,0,0,1-.54-.39,1.14,1.14,0,0,1-.54.39,1.14,1.14,0,0,1,.21.63A1.14,1.14,0,0,1,50,18.24Z"></path>
      <path d="M55.86,21.47a1.14,1.14,0,0,1-1.12-1.33L55,18.71l-1-1a1.14,1.14,0,0,1,.63-1.94L56,15.54l.64-1.3a1.14,1.14,0,0,1,2,0l.64,1.3,1.44.21a1.14,1.14,0,0,1,.63,1.94l-1,1,.25,1.43A1.14,1.14,0,0,1,59,21.34l-1.29-.68-1.29.68A1.13,1.13,0,0,1,55.86,21.47Zm1.28-3.81a1.14,1.14,0,0,1,.21.63,1.14,1.14,0,0,1,.66,0,1.14,1.14,0,0,1,.21-.63,1.14,1.14,0,0,1-.54-.39A1.14,1.14,0,0,1,57.14,17.66Z"></path>
      <path d="M67.18,21.47a1.14,1.14,0,0,1-.53-.13l-1.29-.68-1.29.68a1.14,1.14,0,0,1-1.65-1.2l.25-1.43-1-1a1.14,1.14,0,0,1,.63-1.94l1.44-.21.64-1.3a1.14,1.14,0,0,1,2,0l.64,1.3,1.44.21a1.14,1.14,0,0,1,.63,1.94l-1,1,.25,1.43a1.14,1.14,0,0,1-1.12,1.33Zm-2.35-3.81a1.14,1.14,0,0,1,.21.63,1.14,1.14,0,0,1,.66,0,1.14,1.14,0,0,1,.21-.63,1.14,1.14,0,0,1-.54-.39A1.14,1.14,0,0,1,64.82,17.66Z"></path>
    </svg>
  },
  {
    name: "Investments",
    description: "Grow your money and know the difference between rate of return and real rate of return.",
    svg: <svg id="1202891452" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" class="svg u_1202891452" data-icon-custom="true" data-icon-name="Icon-investment.svg" className="w-6 h-6" > <path d="m12.5 24h-7c-3.799 0-5.5-3.265-5.5-6.5 0-4.643 2.451-9.45 5.827-11.432.077-.045.164-.068.253-.068h5.84c.089 0 .176.023.253.068.806.474 1.562 1.097 2.249 1.854.185.205.17.521-.035.706-.204.186-.52.17-.707-.034-.585-.645-1.223-1.181-1.898-1.594h-5.564c-3.03 1.854-5.218 6.243-5.218 10.5 0 2.537 1.179 5.5 4.5 5.5h7c3.321 0 4.5-2.963 4.5-5.5 0-1.397-.248-2.888-.718-4.308-.087-.263.056-.545.318-.632.262-.089.544.056.631.317.503 1.521.769 3.12.769 4.623 0 3.235-1.701 6.5-5.5 6.5z"></path>
      <path d="m12.5 7h-7c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5h7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zm-7-2c-.276 0-.5.225-.5.5s.224.5.5.5h7c.276 0 .5-.225.5-.5s-.224-.5-.5-.5z"></path>
      <path d="m11.5 5c-.147 0-.292-.064-.391-.188-.172-.216-.137-.53.078-.703l2.774-2.219c.257-.205.188-.478.16-.557-.027-.077-.143-.333-.472-.333h-9.298c-.329 0-.445.256-.472.334-.028.079-.098.352.16.557l2.774 2.219c.215.173.25.487.078.703-.172.215-.486.25-.703.078l-2.774-2.219c-.505-.404-.693-1.059-.479-1.669.214-.609.77-1.003 1.416-1.003h9.299c.646 0 1.202.394 1.416 1.003.214.61.026 1.265-.479 1.669l-2.774 2.219c-.093.073-.203.109-.313.109z"></path>
      <path d="m9.5 18.5h-2.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.5c.551 0 1-.448 1-1s-.449-1-1-1h-1c-1.103 0-2-.897-2-2s.897-2 2-2h2.5c.276 0 .5.224.5.5s-.224.5-.5.5h-2.5c-.551 0-1 .448-1 1s.449 1 1 1h1c1.103 0 2 .897 2 2s-.897 2-2 2z"></path>
      <path d="m9 20c-.276 0-.5-.224-.5-.5v-1.5c0-.276.224-.5.5-.5s.5.224.5.5v1.5c0 .276-.224.5-.5.5z"></path>
      <path d="m9 12.5c-.276 0-.5-.224-.5-.5v-1.5c0-.276.224-.5.5-.5s.5.224.5.5v1.5c0 .276-.224.5-.5.5z"></path>
      <path d="m14.5 12c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l2.5-2.5c.152-.152.384-.188.577-.094l1.678.839 3.245-3.245c.195-.195.512-.195.707 0s.195.512 0 .707l-3.5 3.5c-.153.151-.386.188-.577.094l-1.678-.839-2.245 2.245c-.097.097-.225.146-.353.146z"></path>
      <path d="m22.5 10c-.276 0-.5-.224-.5-.5v-2.5h-2.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5z"></path>
    </svg>
  },
  {
    name: "Will and Trust",
    description: "Essential estate planning tools.",
    svg: ""
  },

]

const Services = () => {
  const svgPath = "M 69.36 79.4 H 30.64 a 1.14 1.14 0 0 1 -1.14 -1.14 v -54 a 1.14 1.14 0 0 1 1.14 -1.14 H 69.36 a 1.14 1.14 0 0 1 1.14 1.14 v 54 A 1.14 1.14 0 0 1 69.36 79.4 Z M 31.77 77.13 H 68.23 V 25.38 H 31.77 Z";
  return (
    <div className='w-full'>
      <div className='text-center bg-[#367d02] w-full pt-16 pb-16'>
        <h1 className='text-[37px] text-white font-bold'>Services </h1>
        <p className='text-xl text-white font-normal mt-2 w-[80%] mx-auto'>Discover more about our extensive range of professional services. We constantly update this page, but if you still can’t find what you’re looking for, please feel free to get in touch with us – we will be more than happy to help.</p>
      </div>
      <div className='bg-white pt-10 pb-[50px]'>
        <h1 style={{ color: 'rgb(4, 80, 116)' }} className='text-center w-full font-bold text-4xl mt-9 mb-9'>What We Offer</h1>
        <div className="w-full max-w-[90%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offer.map((item, index) => (
              <div key={index} className=" p-4 rounded-lg flex ">
                <a href='/'>
                  <div style={{ background: 'rgba(177, 232, 189, 1)' }} className="h-[50px] w-[50px] rounded-full mt-3 ">
                    <span style={{ background: 'rgba(177, 232, 189, 1)' }} className="h-[50px] w-[50px] rounded-full flex justify-center items-center">
                      {item.svg}
                    </span>
                  </div>
                </a>
                <div className="ml-4 w-[80%]">
                  <h1 className="font-bold text-xl mb-2">{item.name}</h1>
                  <p className="font-light text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-gray-100 w-full pt-7'>
        <h1 style={{ color: 'rgb(4, 80, 116)' }} className='text-center w-full font-bold text-4xl mt-9 mb-9'>Our Philosophy</h1>
        <div className='w-full flex justify-center flex-wrap'>
          {data.map((item, index) => (
            <div key={index} className='bg-white w-[90%] sm:w-[60%] md:w-[42%] lg:w-[29%] xl:w-[24%] mx-7 mb-6 shadow-md'>
              <div className='w-[100%] text-center'>
                <div className='w-[90%] m-auto pt-10'>
                  <img src={item.imgSrc} alt={`Image ${index}`} className='mx-auto' />
                </div>
                <h1 className='font-bold mt-6 text-[36px] '>{item.title}</h1>
                <p className='text-[#747474] my-4 w-[80%] mx-auto'>{item.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
