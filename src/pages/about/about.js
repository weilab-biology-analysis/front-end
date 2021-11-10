import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import "./about.css";
import { EnvironmentOutlined, MailOutlined,MailFilled } from "@ant-design/icons";
import emailImg from '../../constants/img/emai2.png'
function About(store) {
  useEffect(() => {}, []);
  return (
    <div className="about-body">
      <div className="about-connect-text">
        <div className="about-connect-text_title">
          <div className="about-connect-text_title-text-left"></div>
          <div className="about-connect-text_title-text">Contact us</div>
          <div className="about-connect-text_title-text-right"></div>
        </div>
      </div>
      <div className="about-connect-text-and-map">
        <div className="about-connect-text-items">
          <div className="about-connect-text-position">
            <div className="about-connect-text-position-title">
              <EnvironmentOutlined /> Location
            </div>
            <div className="about-connect-text-position-con">
              Room 404,Joint SDU-NTU Centre for Artificial Intelligence Research
              (C-FAIR) Shandong University, Jinan, Shandong, China
            </div>
          </div>
          <div className="about-connect-text-position">
            <div className="about-connect-text-position-title">
              <MailOutlined /> Post code
            </div>
            <div className="about-connect-text-position-con">250101</div>
          </div>
          <div className="about-connect-text-position">
            <div className="about-connect-text-position-title">
              <MailFilled/> E-MAIL
            </div>
            <div className="about-connect-text-position-con">
              <img src={emailImg}/>
            </div>
          </div>
        </div>

        <div class="map-w3ls">
          <iframe
            className="map-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1222.0683135125757!2d117.13782155713407!3d36.666935864922635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDM5JzU5LjYiTiAxMTfCsDA4JzIxLjIiRQ!5e0!3m2!1szh-CN!2s!4v1622364651884!5m2!1szh-CN!2s"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default inject("store")(observer(About));
