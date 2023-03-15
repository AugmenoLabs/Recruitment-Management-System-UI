import { IconButton, Dialog, Button, Tooltip, DialogActions, DialogContent } from '@mui/material';
import React, {useState} from 'react'
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import { CandidateInterface } from '../../Interface/CandidateInterface';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface Props {
    id: string;
    data : CandidateInterface[];
  }

const PreviewResume: React.FunctionComponent<Props> = ({id, data}) => {

    const [byteArray, setArray] = useState<Uint8Array>(new Uint8Array())
    const [open, setOpen] = useState(false)
    const APIcall = () : void => {
        setOpen(true);
        const row = data.filter(x => x.id === id)
        const resume = row[0].resume
        const byteCharacters = atob(resume)
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        setArray(new Uint8Array(byteNumbers))
    }

    const handleClose = () : void => {
        setOpen(false)
    }

    return(
        <>
            <IconButton
                style={{ marginLeft: '1rem' }}
            >
                <Tooltip title = "Preview the Resume"><VisibilitySharpIcon onClick={APIcall} /></Tooltip>
            </IconButton>

            <Dialog open = {open}
                maxWidth="md"
                fullWidth
                
            >
                    <Dialog open = {open}
                    fullWidth
                    maxWidth="sm"
                    >
                        <DialogContent>
                            <Viewer
                                    fileUrl={byteArray}
                                    defaultScale={SpecialZoomLevel.PageFit}
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
            </Dialog>
        </>
    )
}

export default PreviewResume;