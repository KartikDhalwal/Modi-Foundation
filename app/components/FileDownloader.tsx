"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { FaDownload } from 'react-icons/fa';
import { CgSpinner } from 'react-icons/cg';
import { Button } from '@mui/material';
const FileDownloader = ({ url, text, fileName, className = '' }: { url: string, text: string, fileName: string, className: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleDownload = async () => {
        if(!url){
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.get(url, {
                responseType: 'blob',
            });
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${fileName} ${new Date().toDateString()}.pdf`; // set default download file name or make it dynamic
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        } catch (error) {
            console.error('Download error:', error);
            setIsLoading(false);
        } finally {
        }
    };

    return (
        <>
            <div className={`flex gap-2 ${className}`} >
                <div onClick={handleDownload} className=" cursor-pointer text-center flex justify-between font-medium">
                    {/* <p className="text-center pt-1">
                        {isLoading ? (
                            <>Downloading....</>
                        ) : (
                            <>
                                {text}
                            </>
                        )}
                    </p> */}
                    <Button className=" rounded-r-full  text-white h-full  ">
                        {isLoading ? (
                            <CgSpinner className="animate-spin  text-white" />
                            
                        ) : (
                            <FaDownload />
                        )}
                    </Button>
                </div>
            </div >
        </>
    );
};

export default FileDownloader;
