import React from "react"
import PropTypes from "prop-types"

const Logo = ({ className, ...props }) => (
  <svg viewBox="0 0 250 32" className={className}>
    <g fill={props.color}>
      <path d="M14.463 20.395l2.635-2.749 7.06 9.752h6.02L20.48 14.21l9.273-9.72h-6.051l-9.24 10.014V4.492h-5.01v22.907h5.01zM34.904 4.491h5.09v22.907h-5.09zM52.027 27.398h5.02V9.137h6.943V4.49H45.084v4.647h6.943zM78.92 28.019c4.399 0 7.006-1.566 9.352-4.078l-3.193-3.23c-1.793 1.632-3.39 2.675-5.996 2.675-3.91 0-6.615-3.262-6.615-7.176v-.066c0-3.914 2.77-7.111 6.615-7.111 2.28 0 4.073.979 5.832 2.577l3.194-3.686C85.99 5.836 83.417 4.4 79.115 4.4c-7.005 0-11.893 5.318-11.893 11.81v.065c0 6.557 4.986 11.744 11.698 11.744zM98.601 18.46h9.255v9.167h5.018V4.792h-5.018v9.037H98.6V4.791h-5.017v22.835H98.6zM137.02 23.158h-12.382v-4.795h10.753v-4.47h-10.753V9.261h12.22v-4.47h-17.205v22.836h17.368zM147.742 13.11l11.046 14.517h4.268V4.792h-4.953v14.06l-10.688-14.06h-4.627v22.835h4.954z" />
      <path d="M172.38 0H0v32h250V0h-77.621zm-.013 31.711H.29V.29h172.078V31.71zm56.735-12.335c1.38-.008 2.461 1.309 2.451 2.884-.009 1.47-.74 2.456-1.718 2.594-.004.65.45 1.282 1.122 1.765.029.016.058.033.092.056.45.3 1.215.442 1.51.49.297.04.616.057.884.047.267-.01.536-.03.875-.12.34-.09.95-.39 1.318-.7.312-.262.679-.647.89-.893.69-1.034.93-2.202.93-3.258 0-3.381-2.51-6.011-5.41-7.456 2.029-1.446 5.414-4.167 5.784-4.732-2.032.642-4.607-.962-7.142-.962-1.056 0-1.918.276-2.369.844-.125.158-.269.099-.256-.113.198-3.346 1.932-5.132 4.531-5.132 1.914 0 3.889 1.208 5.63 1.208.713 0 1.51-.15 2.032-.874.075-.104.204-.073.2.06-.135 4.123-2.32 5.829-4.558 7.698 2.912 1.493 5.205 4.006 5.205 7.45 0 3.402-2.808 6.395-6.99 7.273l.013-.007c-.2.04-.402.067-.603.073a6.494 6.494 0 01-1.844-.143 6.148 6.148 0 01-.42-.118c-2.357-.505-4.69-2.017-4.69-4.838 0-1.895 1.154-3.093 2.533-3.096zm-21.024 2.395l.006-.13v-.016c0-.026.002.034 0-.062l.005-.046.008-.093c.012-.123.022-.246.046-.365.021-.12.041-.24.073-.357.113-.469.294-.904.518-1.294.45-.782 1.055-1.384 1.703-1.853a9.116 9.116 0 012.029-1.105c.17-.069.342-.132.514-.19a9.361 9.361 0 01-2.042-1.613 6.645 6.645 0 01-.865-1.156 5.677 5.677 0 01-.589-1.396 5.441 5.441 0 01-.19-1.486c-.002-.123.009-.242.015-.362l.006-.09.002-.063.002-.016.006-.032.02-.13c.011-.068.034-.218.056-.337.02-.13.049-.234.077-.345a5.536 5.536 0 011.252-2.325 6.04 6.04 0 012.006-1.44 7.872 7.872 0 012.184-.611 9.084 9.084 0 011.083-.08h.274l.26.007c.183.009.365.018.544.033.719.062 1.446.18 2.188.406.738.224 1.491.571 2.15 1.108a4.964 4.964 0 011.52 2.11c.156.42.258.868.29 1.32.01.113.01.226.013.34V10.19l-.002.032-.004.065-.008.13c-.003.068-.023.219-.04.338l-.028.188a4.952 4.952 0 01-.518 1.418 6.47 6.47 0 01-.734 1.076c-.533.648-1.254 1.087-1.974 1.38.276.167.552.342.826.529.657.454 1.314.959 1.927 1.587.306.315.602.657.874 1.04.271.383.519.806.72 1.266.198.46.368.96.4 1.482.012.13.02.258.024.387l.002.194v.104l-.004.11-.002.057c0 .018 0 .04-.002.047l-.007.065-.008.065c0-.026 0 .053-.002.053l-.002.022-.005.043-.046.34c-.148.908-.475 1.798-.98 2.551a5.812 5.812 0 01-1.895 1.778c-.36.213-.73.388-1.105.525-.375.136-.75.244-1.121.328-.744.17-1.473.248-2.191.295-.18.007-.359.019-.542.02-.19.009-.346.004-.534.007-.358-.003-.716-.02-1.078-.035-.722-.043-1.462-.106-2.231-.26-.765-.152-1.566-.401-2.306-.845a5.173 5.173 0 01-1.86-1.865 5.219 5.219 0 01-.518-1.259c-.027-.11-.057-.22-.078-.332l-.057-.335c-.015-.112-.026-.225-.037-.338-.003-.028-.007-.055-.009-.084l-.004-.095-.007-.187-.004-.094c0-.03-.002-.066 0-.083l.006-.13zm-18.443 0l.006-.13v-.016c0-.026.002.034.001-.062l.005-.046.008-.093c.012-.123.022-.246.046-.365.02-.12.04-.24.072-.357.114-.469.295-.904.519-1.294.45-.782 1.055-1.384 1.703-1.853a9.123 9.123 0 012.028-1.105 9.42 9.42 0 01.515-.19 9.361 9.361 0 01-2.042-1.613 6.647 6.647 0 01-.866-1.156 5.664 5.664 0 01-.588-1.396 5.426 5.426 0 01-.19-1.486c-.002-.123.009-.242.015-.362l.006-.09.002-.063.002-.016.005-.032.021-.13c.01-.068.034-.218.056-.337.02-.13.049-.234.077-.345a5.531 5.531 0 011.252-2.325 6.028 6.028 0 012.007-1.44 7.858 7.858 0 012.183-.611 9.085 9.085 0 011.083-.08h.274l.26.007c.183.009.365.018.543.033.719.062 1.447.18 2.188.406.739.224 1.492.571 2.151 1.108a4.96 4.96 0 011.52 2.11c.156.42.258.868.29 1.32.01.113.01.226.013.34V10.19l-.002.032-.004.065-.009.13c-.003.068-.022.219-.038.338l-.03.188a5 5 0 01-.518 1.418c-.211.389-.458.748-.733 1.076-.533.648-1.255 1.087-1.974 1.38.276.167.551.342.825.529.657.454 1.315.959 1.928 1.587.305.315.602.657.874 1.04.27.383.518.806.72 1.266.197.46.367.96.4 1.482.012.13.02.258.024.387l.001.194v.104l-.003.11-.002.057c0 .018-.001.04-.003.047l-.007.065-.008.065-.001.053-.003.022-.005.043-.046.34c-.147.908-.475 1.798-.979 2.551a5.813 5.813 0 01-1.896 1.778c-.36.213-.73.388-1.105.525-.375.136-.749.244-1.121.328-.744.17-1.473.248-2.192.295-.18.007-.357.019-.54.02-.19.009-.347.004-.534.007-.359-.003-.716-.02-1.078-.035-.722-.043-1.462-.106-2.231-.26-.766-.152-1.567-.401-2.307-.845a5.179 5.179 0 01-1.859-1.865 5.183 5.183 0 01-.518-1.259c-.028-.11-.057-.22-.078-.332l-.059-.335c-.013-.112-.024-.225-.036-.338l-.008-.084-.005-.095-.007-.187-.003-.094c-.001-.03-.002-.066 0-.083l.005-.13zm-7.62-12.186a.452.452 0 01-.082-.007.07.07 0 01-.005.007h-.025c-.282 0-.279-.209-.08-.286 1.412-.546 3.724-2.456 4.618-4.506.039-.09.085-.12.126-.094.08-.05.161.097.161.45v20.157c0 .535.187 1.209.488 1.638.18.258.697.736.284.736h-5.716c-.36 0 .094-.441.308-.65.431-.422.753-1.152.753-1.724V9.47s-.551.115-.83.115z" />
      <path d="M213.734 11.756c.357.283.807.55 1.31.802.25.125.518.244.795.357l.422.167.217.082.21.077.121.044.06.021.107.042.255.104c.159.066.318.133.478.203.52.257 1.01.502 1.01.502l.03-.037c1.019-.896 1.679-2.33 1.679-3.947 0-1.31-.434-2.5-1.14-3.38a3.954 3.954 0 00-.54-.606 3.6 3.6 0 00-1.734-.869c-.082-.013-.165-.028-.245-.04l-.243-.022-.26-.006c-.073 0-.163.007-.244.01-.33.023-.658.086-.97.19a3.553 3.553 0 00-1.584 1.054 3.798 3.798 0 00-.8 1.575 4.76 4.76 0 00-.106 1.567c.008.061.01.129.022.172.01.053.015.075.025.18l.014.13.003.032.002.017c.002-.078.002-.016.003-.03l.01.04c.014.052.021.106.039.155.058.203.141.379.236.54.099.159.212.306.346.45.137.142.29.287.472.424z" />
      <g>
        <path d="M195.292 11.756c.356.283.807.55 1.309.802.251.125.518.244.795.357l.423.167.216.082.21.077.121.044.061.021.106.042.255.104c.16.066.319.133.479.203.52.257 1.01.502 1.01.502l.03-.037c1.019-.896 1.678-2.33 1.678-3.947 0-1.31-.434-2.5-1.14-3.38a3.946 3.946 0 00-.539-.606 3.601 3.601 0 00-1.735-.869c-.081-.013-.164-.028-.245-.04l-.242-.022-.26-.006c-.074 0-.163.007-.244.01-.331.023-.658.086-.97.19a3.552 3.552 0 00-1.585 1.054 3.787 3.787 0 00-.8 1.575 4.75 4.75 0 00-.106 1.567c.008.061.01.129.022.172.01.053.015.075.026.18l.013.13.004.032.002.017c.002-.078.002-.016.003-.03l.01.04c.013.052.02.106.038.155.06.203.142.379.236.54.099.159.212.306.346.45.138.142.29.287.473.424zM197.926 27.178c1.06 0 2.042-.37 2.854-1.002a4.424 4.424 0 001.73-2.718c.095-.494.1-.973.033-1.447 0 0-.032-.202-.114-.454-.08-.252-.19-.448-.28-.617-.176-.334-.46-.688-.832-1.034a8.233 8.233 0 00-1.323-.978c-.5-.304-1.047-.577-1.612-.84-.283-.131-.57-.264-.863-.391l-.441-.196-.224-.096-.195-.081-.27-.116-.263-.117a14.518 14.518 0 01-.96-.477 6.37 6.37 0 00-.483.469c-1.102 1.049-1.802 2.62-1.802 4.379 0 3.157 2.258 5.716 5.045 5.716z" />
      </g>
      <path d="M216.369 27.178c1.059 0 2.042-.37 2.853-1.002a4.424 4.424 0 001.73-2.718c.096-.494.101-.973.033-1.447 0 0-.031-.202-.113-.454-.08-.252-.19-.448-.28-.617-.177-.334-.461-.688-.832-1.034a8.22 8.22 0 00-1.324-.978c-.5-.304-1.046-.577-1.61-.84-.285-.131-.57-.264-.865-.391l-.44-.196-.224-.096-.195-.081-.27-.116-.263-.117a14.779 14.779 0 01-.961-.477c-.171.148-.33.306-.482.469-1.102 1.049-1.803 2.62-1.803 4.379 0 3.157 2.26 5.716 5.046 5.716z" />
    </g>
  </svg>
)

Logo.propTypes = {
  color: PropTypes.string,
}

Logo.defaultProps = {
  color: "black",
}

export default Logo
