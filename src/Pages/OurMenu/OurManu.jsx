import React from "react";
import BannarCover from "../../Components/Shared/BannarCover/BannarCover";
import imageMenu from '../../assets/menu/banner3.jpg'

function OurMenu() {
  return (
    <div>
      {/* bannar section  */}
      <section>
        <BannarCover heading={'Our Menu'} subHeading={'Would you like to try a dish?'} bgImage={imageMenu}></BannarCover>
      </section>
    </div>
  );
}

export default OurMenu;
