import { Dialog, DialogTitle, IconButton } from '@mui/material';
import React, {useState} from 'react'
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import { CandidateInterface } from '../../Interface/CandidateInterface';
import { Viewer, Worker} from '@react-pdf-viewer/core';
// import { DefaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css' 
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

interface Props {
    id: string;
    data : CandidateInterface[];
  }
const PreviewResume: React.FunctionComponent<Props> = ({id, data}) => {

    const [pdfFile, setpdfFile] = useState<any>(null)
    const [open, setOpen] = useState(false)
    const APIcall = () : any => {
        // console.log(data)
        // alert('clicked')
        const row = data.filter(x => x.id === id)
        const resume = row[0].resume
        const byteCharacters = atob(resume)
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        // console.log(byteArray)
        const blob = new Blob([byteArray])
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onload = e => {
            // setpdfFile(e.target?.result)
            setpdfFile(blob)
        }
        console.log(pdfFile)
        setOpen(true)
    }

    return(
        <>
            <IconButton
                style={{ marginLeft: '1rem' }}
            >
                <VisibilitySharpIcon onClick={APIcall} />
            </IconButton>

           

            <Dialog open = {open}>
                <DialogTitle>Hello</DialogTitle>
                 <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdfFile} plugins = {[]}/>
                 </Worker>
            </Dialog>
        </>
    )
}

export default PreviewResume;