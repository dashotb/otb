"use client"
import { seoIcon, magaeIcon, emailIcon, ecommerceIcon, creatiiveIcon, blockchainIcon, cyberrsecIcon, robotIcon } from "@/icons/icons";
import { logo } from "@/img/images";


export default function Loader(){

    return(
        <div className="main">
          <div className="big-circle absolute md:relative md:top-0 md:left-0 top-[13%] left-[5%] max-w-[90dvw] max-h-[90dvw] md:max-w-[100%] md:max-h-[100%]">
            <div className="icon-block">
              <img src={seoIcon} alt="web design icon" />
            </div>
            <div className="icon-block">
              <img src={magaeIcon} alt="game design icon" />
            </div>
            <div className="icon-block">
              <img src={emailIcon} alt="game dev icon" />
            </div>
            <div className="icon-block">
              <img src={ecommerceIcon} alt="ui-ux icon" />
            </div>
          </div>
          <div className="circle  max-w-[65dvw] max-h-[65dvw]">
            <div className="icon-block">
              <img src={creatiiveIcon} alt="app icon" />
            </div>
            <div className="icon-block">
              <img src={blockchainIcon} alt="blockchain icon" />
            </div>
            <div className="icon-block">
              <img src={cyberrsecIcon} alt="ar-vr icon" />
            </div>
            <div className="icon-block">
              <img src={robotIcon} alt="artificial intelligence icon" />
            </div>
          </div>
          <div className="center-logo">
            <img src={logo} alt="logo" className='w-[40dvw] h-[40dvw] max-w-[200px] max-h-[200px]' />
          </div>
        </div>
    )
}