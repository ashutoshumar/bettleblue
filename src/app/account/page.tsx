"use client"
import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import { useDropzone ,FileWithPath} from "react-dropzone";

//INTERNAL IMPORT
import Style from "./account.module.css";
import images from "../../../public/img";
import From from "../../accountPage/form/Form";

const account = () => {
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    const onDrop = useCallback(async (acceptedFiles: FileWithPath[]) => {
      setFileUrl(acceptedFiles[0].path || null);
    }, []);
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: {
        'image/jpeg': [],
        'image/png': []
      },
      maxSize: 5000000,
    });

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile settings</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={images.user9}
            alt="account upload"
            width={150}
            height={150}
            className={Style.account_box_img_img}
          />
          <p className={Style.account_box_img_para}>Change Image</p>
        </div>
        <div className={Style.account_box_from}>
          <From />
        </div>
      </div>
    </div>
  );
};

export default account;