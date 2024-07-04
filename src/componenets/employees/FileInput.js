import React, { useRef, useState } from 'react';
import Plus from '../../assets/icons/Plus.png'

const FileInputComponent = ({ label, name, onFileChange }) => {
    const [fileName, setFileName] = useState('No File Chosen');
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const { files } = e.target;
        if (files.length > 0) {
          const selectedFile = files[0];
          setFileName(selectedFile.name);
          onFileChange(selectedFile);
        }
      };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = () => {
  };

  return (
    <div className="file-input-component">
        <img src={Plus} alt='plus' className='plusicon' />
      <div className="form-group inputfile">
        <div>
        <input
          type="file"
          name={name}
          accept=".jpeg, .png"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        
        <button type="button" className='filebtn' onClick={handleFileButtonClick}>
          Choose File
        </button>
        </div>
        <p className='filedescription'>JPEG or PNG Max Size of 500KB</p>
      </div>
      {fileName && (
        <div className="file-name">
          <p>{fileName}</p>
        </div>
        
      )}
        <button type="button" className='uploadbtn' onClick={handleUpload}>
            Upload
          </button>
    </div>
  );
};

export default FileInputComponent;
