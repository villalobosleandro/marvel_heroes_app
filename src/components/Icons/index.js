import React from 'react'
import Svg, { Circle, Path, Rect } from 'react-native-svg';

const SIZE = 30;
const COLOR = "#fff";

export const AverngersIcon = ({ size, color}) => {
    return (
      <Svg
        fill="#000"
        height={size || SIZE}
        width={size || SIZE}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 460 460"
        xmlSpace="preserve"
      >
        <Path d="M323.503 56.628V10c0-5.522-4.478-10-10-10h-57.119a10.002 10.002 0 00-9.037 5.718l-13.89 29.313A192.26 192.26 0 00230 35C112.827 35 17.5 130.327 17.5 247.5c0 50.425 17.799 98.891 50.256 137.229l-28.899 60.989A10 10 0 0047.894 460H111.1c3.864 0 7.382-2.227 9.037-5.718l9.268-19.559C160.201 451.289 194.751 460 230 460c117.173 0 212.5-95.327 212.5-212.5 0-81.084-46.496-155.298-118.997-190.872zM230 440c-35.299 0-69.815-9.636-99.814-27.865a9.994 9.994 0 00-8.063-1.033 10.002 10.002 0 00-6.167 5.297L104.772 440H63.697l24.939-52.632a10 10 0 00-1.611-10.98C55.088 340.984 37.5 295.211 37.5 247.5 37.5 141.355 123.855 55 230 55c2.959 0 6.06.075 9.217.225a9.998 9.998 0 009.508-5.707L262.711 20h40.792v42.966a10 10 0 005.872 9.108C378.096 103.22 422.5 172.079 422.5 247.5 422.5 353.645 336.145 440 230 440z" fill={color || COLOR}/>
        <Path d="M379.758 159.47c-14.726-25.856-35.838-47.638-61.055-62.99a10.011 10.011 0 00-10.1-.176 10.003 10.003 0 00-5.101 8.718v155.25l-37.121-38.056.002-78.823a10 10 0 00-19.037-4.282l-53.493 112.893a10 10 0 009.037 14.282h53.49c5.522 0 10-4.477 10-10v-5.428l33.152 33.986-33.152 33.987v-5.427c0-5.522-4.478-10-10-10h-80.556a10.002 10.002 0 00-9.037 5.718l-34.673 73.174a9.999 9.999 0 003.507 12.614c28.086 18.638 60.722 28.488 94.377 28.488 95.364 0 172.948-78.907 172.948-175.898.002-30.952-8.017-61.393-23.188-88.03zm-161.063 86.815l27.688-58.433-.002 58.433h-27.686zm84.808 63.131v23.987h-23.398l23.398-23.987zM230 403.398c-26.83 0-52.927-7.093-75.998-20.587l28.15-59.407h64.229v19.999c0 .019.003.036.003.055.002.357.022.715.062 1.07.009.075.025.149.035.225.038.278.084.556.146.831.025.112.057.221.085.331.062.238.13.475.209.708a10.165 10.165 0 00.41 1.015c.045.095.088.189.136.283.119.234.25.464.388.689.049.08.094.161.146.239.151.232.317.458.489.68.05.064.095.132.147.194.198.241.41.474.634.7.033.033.062.069.095.103l.032.034a10.065 10.065 0 001.485 1.192c.121.08.246.15.37.225.133.08.266.161.404.234.129.069.261.133.392.196a9.186 9.186 0 001.292.514c.122.039.243.078.366.112.177.049.356.089.537.129.112.024.223.052.335.072.202.037.407.063.614.087.094.012.187.028.281.036.285.026.574.04.865.041l.04.002h57.123c5.522 0 10-4.478 10-10V124.146c37.055 29.315 59.445 75.057 59.445 123.354.001 85.963-68.611 155.898-152.947 155.898zM230.69 76.244c-1.947-2.922-5.28-4.588-8.792-4.445-44.51 2.091-86.022 21.315-116.891 54.134-30.924 32.879-47.955 76.051-47.955 121.567 0 37.202 11.289 72.769 32.646 102.854a10.001 10.001 0 0017.192-1.507L231.404 86.07a10.002 10.002 0 00-.714-9.826zM96.609 323.836c-12.84-23.211-19.558-49.281-19.558-76.336 0-77.562 55.276-142.106 128.676-153.95L96.609 323.836z" fill={color || COLOR} />
      </Svg>
    )
  }