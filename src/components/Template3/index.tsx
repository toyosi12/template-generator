import { TemplateProp } from "../../interfaces";
import styles from "./template3.module.scss";
import { ReactComponent as ZigZag } from "../../images/zigzag.svg";
import { ReactComponent as ZigZag2 } from "../../images/zigzag2.svg";
import { adjustFontSize } from "../../utils";
import Workspace from "../Workspace";
import { useState } from "react";

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
  img: "/images/template2-bg.png",
  cta: "THE CTA COMES HERE",
};

const PerforatedImage = () => {
  const perforatedImageStyle = {
    backgroundImage: `url(/images/${"template2-bg.png"})`,
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
      <div className={styles.template}>
        <ZigZag className={styles.templateTopZigZag} />
        <ZigZag2 className={styles.templateBottomZigZag} />

        <div className={styles.templateContentTop}>
          <p
            className={styles.templateContentTopTitle}
            style={adjustFontSize(70, fields.title.length, 6)}
          >
            {fields.title}
          </p>
          <div className={styles.templateContentTopImgContainer}>
            <PerforatedImage />
            {/* <img src={fields.img} alt="template" /> */}
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
            <button className={styles.templateContentBottomBtn}>
              {fields.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolBar: React.FC<Template> = ({ fields, setField }) => {
  const handleFileChange = (e: React.ChangeEvent<any>) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e?.target?.result) {
          setField("img", e.target?.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="toolBarContainer">
      <div>
        <label>title</label>
        <textarea
          name="title"
          onChange={(e) => setField(e.target.name, e.target.value)}
          defaultValue={initialFields.title}
        />
      </div>
      <div>
        <label>subtitle</label>
        <textarea
          name="subtitle"
          onChange={(e) => setField(e.target.name, e.target.value)}
          defaultValue={initialFields.subtitle}
        />
      </div>
      <div>
        <label>cta</label>
        <input
          name="cta"
          onChange={(e) => setField(e.target.name, e.target.value)}
          defaultValue={initialFields.cta}
        />
      </div>
      <div>
        <label>img</label>
        <input type="file" name="img" onChange={handleFileChange} />
      </div>
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
