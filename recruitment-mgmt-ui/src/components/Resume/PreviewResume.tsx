import { IconButton, Dialog, Button, Tooltip, DialogActions, DialogContent } from '@mui/material';
import React, {useState} from 'react'
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import { Viewer, Worker } from '@react-pdf-viewer/core';   // SpecialZoomLevel
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface Props {
    // id: string;
    data : string // CandidateInterface[];
  }

const PreviewResume: React.FunctionComponent<Props> = ({data}) => {

    const [byteArray, setArray] = useState<Uint8Array>(new Uint8Array())
    const [open, setOpen] = useState(false)
    const APIcall = () : void => {
        const byteCharacters = atob(data)
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        setArray(new Uint8Array(byteNumbers))
        setOpen(true);
    }

    const handleClose = () : void => {
        setOpen(false)
    }

    return(
        <>
            <IconButton 
            // style={{ marginLeft: '1rem' }}
            >
                <Tooltip title = "Preview the Resume"><VisibilitySharpIcon onClick={APIcall} /></Tooltip>
            </IconButton>
            
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                <Dialog open = {open}
                    fullWidth
                    maxWidth="md"
                >
                    <DialogContent>
                        <Viewer
                            fileUrl={byteArray}
                            // defaultScale={SpecialZoomLevel.PageFit}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="contained"
                            onClick={handleClose}
                            style={{ marginRight: '1rem' }}
                        >
                        Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Worker>
        </>
    )
}

export default PreviewResume;