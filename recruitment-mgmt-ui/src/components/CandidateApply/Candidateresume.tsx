import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import uploadImg from '../../image/cloud-upload-regular-240 (1).png';
import { useDropzone } from 'react-dropzone';

const Candidateresume: React.FunctionComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setSelectedFiles([...selectedFiles, ...acceptedFiles]);
    },
    [setSelectedFiles, selectedFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Typography variant="h5" sx={{ mt: 5, textAlign: 'center' }}>
        Upload Resume
      </Typography>
      <Container component="main" maxWidth="md" sx={{ mt: 3 }}>
        <Box {...getRootProps()} sx={{ mt: 3 }}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <Typography variant="body1" textAlign="center">
              Drop the files here ...
            </Typography>
          ) : (
            <Typography variant="body1" textAlign="center">
              Drag & drop some files here, or click to select files
            </Typography>
          )}
          <Grid container>
            <Grid item mx="auto">
              <Box
                component="img"
                sx={{
                  height: 100,
                }}
                alt="Upload_image"
                src={uploadImg}
              />
            </Grid>
          </Grid>
          <Grid>
            {selectedFiles.map((item, index) => {
              return (
                <Grid key={item} mx="auto">
                  <Typography>{item.name}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        {/* <Grid container>
        <Grid item  mx='auto' my={2}>
          <Button variant="contained" onClick={uploadFile} >Upload Files</Button>
        </Grid>
      </Grid> */}
      </Container>
    </>
  );
};

export default Candidateresume;
