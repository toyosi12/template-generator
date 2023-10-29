import { TemplateProp } from "../../interfaces";
import styles from "./template3.module.scss";
import { ReactComponent as ZigZag } from "../../images/zigzag.svg";
import { ReactComponent as ZigZag2 } from "../../images/zigzag2.svg";
import { adjustFontSize, handleFile } from "../../utils";
import Workspace from "../Workspace";
import { useState } from "react";
import TextArea from "../DesignSystem/TextArea/TextArea";
import UploadBtn from "../DesignSystem/UploadBtn/UploadBtn";

interface TemplateFields {
  title: string;
  subtitle: string;
  img: string;
  cta: string;
}

interface Template {
  fields: TemplateFields;
  setField: (key: string, value: any) => void;
}

const initialFields = {
  title: "Lorem Impsum Dolor Text That is Dope And Cool.",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  img: "/images/sample-image1.jpeg",
  cta: "THE CTA COMES HERE",
};

const PerforatedImage: React.FC<{ img: string }> = ({ img }) => {
  const perforatedImageStyle = {
    backgroundImage: `url(${img})`,
  };
  return (
    <div className={styles.perforatedImage}>
      <div style={perforatedImageStyle}></div>
      <div style={perforatedImageStyle}></div>
      <div style={perforatedImageStyle}></div>
      <div style={perforatedImageStyle}></div>
      <div style={perforatedImageStyle}></div>
      <div style={perforatedImageStyle}></div>
      <div style={perforatedImageStyle}></div>
      <div style={perforatedImageStyle}></div>
      <div style={perforatedImageStyle}></div>
    </div>
  );
};

const Canvas: React.FC<Template> = ({ fields, setField }) => {
  return (
    <div className="canvas">
      <div className={`${styles.template} template`}>
        <ZigZag className={styles.templateTopZigZag} />
        <ZigZag2 className={styles.templateBottomZigZag} />

        <div className={styles.templateContentTop}>
          <p
            className={styles.templateContentTopTitle}
            style={adjustFontSize(67, fields.title.length, 6)}
          >
            {fields.title}
          </p>
          <div className={styles.templateContentTopImgContainer}>
            <PerforatedImage img={fields.img} />
          </div>
        </div>
        <div className={styles.templateContentBottom}>
          <div>
            <p
              className={styles.templateContentBottomSubtitle}
              style={adjustFontSize(112, fields.subtitle.length, 2.5)}
            >
              {fields.subtitle}
            </p>
          </div>

          <div>
            <button
              className={styles.templateContentBottomBtn}
              style={adjustFontSize(20, fields.cta.length, 3.2)}
            >
              {fields.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolBar: React.FC<Template> = ({ fields, setField }) => {
  const handleFileChange = async (e: React.ChangeEvent<any>) => {
    const uploadedImage = await handleFile(e.target.files[0]);
    setField("img", uploadedImage.url);
  };
  return (
    <div className="toolBoxContainer">
      <TextArea
        label="Title"
        name="title"
        onChange={(e) => setField(e.target.name, e.target.value)}
        defaultValue={initialFields.title}
      />
      <TextArea
        label="Subtitle"
        name="subtitle"
        onChange={(e) => setField(e.target.name, e.target.value)}
        defaultValue={initialFields.subtitle}
      />
      <TextArea
        label="CTA"
        name="cta"
        onChange={(e) => setField(e.target.name, e.target.value)}
        defaultValue={initialFields.cta}
      />

      <UploadBtn
        label="Image"
        type="file"
        name="img"
        id="t3Img"
        onChange={handleFileChange}
      />
    </div>
  );
};

const Template3 = () => {
  const [fields, setFields] = useState<TemplateFields>(initialFields);

  const updateField = (key: string, value: string) => {
    setFields({
      ...fields,
      [key]: value,
    });
  };
  return (
    <Workspace>
      <>
        <Canvas fields={fields} setField={updateField} />
        <ToolBar fields={fields} setField={updateField} />
      </>
    </Workspace>
  );
};

export default Template3;
