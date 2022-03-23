import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Button from '@mui/material/Button'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, {
    stepConnectorClasses,
} from '@mui/material/StepConnector'
import { Container, Grid, Paper, TextField, Typography } from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import QuizIcon from '@mui/icons-material/Quiz'
import {  useState } from 'react'
import { Box } from '@mui/system'
import QaTable from './QaTable'
import { ReactMediaRecorder } from 'react-media-recorder'
import toast from 'react-hot-toast'

const AudioRecorder = ({ title }) => {
    const [output, setOutput] = useState('')
    return (
        <Stack spacing={4}>
            <Paper sx={{ p: 10 }}>
                <ReactMediaRecorder
                    audio={true}
                    mediaRecorderOptions={{
                        mimeType: 'audio/wav',
                        audioBitsPerSecond: '16',
                    }}
                    render={({
                        status,
                        startRecording,
                        stopRecording,
                        mediaBlobUrl,
                    }) => (
                        <Stack spacing={4}>
                            {/* <p>{status}</p> */}
                            <audio src={mediaBlobUrl} controls autoPlay loop />
                            <Button
                                variant="contained"
                                onClick={() => {
                                    toast.success('Recording Started')
                                    startRecording()
                                }}
                            >
                                Start Recording
                            </Button>
                            <Button variant="contained" onClick={() => {
                                    toast.success('Recording Stopped')
                                    stopRecording()
                            }}>
                                Stop Recording
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={async () => {
                                    const formData = new FormData()
                                    const audioBlob = await fetch(
                                        mediaBlobUrl
                                    ).then((r) => r.blob())
                                    const audiofile = new File(
                                        [audioBlob],
                                        `wav_file.wav`,
                                        { type: 'audio/wav' }
                                    )

                                    formData.append('audio_file', audiofile)
                                    toast.promise(
                                        (async () => {
                                            const res = await fetch(
                                                `http://localhost:5000/api/app/INFOX/`,
                                                {
                                                    method: 'POST',
                                                    body: formData,
                                                }
                                            )
                                            const data = await res.json()
                                            setOutput(data.output)
                                            console.log('data from res', data.output)
                                        })(),
                                        {
                                            loading: 'Sending Audio...',
                                            success: <b>Audio sent</b>,
                                            error: <b>Could not send audio.</b>,
                                        }
                                    )
                                }}
                            >
                                Get Answer
                            </Button>
                        </Stack>
                    )}
                />
            </Paper>
            <Paper sx={{ p: 10 }}>Output here: {output} </Paper>
        </Stack>
    )
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}))

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
}))
function ColorlibStepIcon(props) {
    const { active, completed, className } = props

    const icons = {
        1: <QuestionAnswerIcon />,
        2: <QuizIcon />,
    }

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    )
}
const steps = ['Add QA', 'Ask question']

const AddQuestion = ({ db, setDb, title, setTitle }) => {
    const [count, setCount] = useState(0)
    // const [db, setDb] = useState([])
    const [qns, setQns] = useState('')
    const [ans, setAns] = useState('')

    const handleNext = () => {
        if (!qns || !ans) return
        setCount((_) => _ + 1)
        setDb((_) => [..._, { question: qns, answer: ans }])
        setQns('')
        setAns('')
    }
    console.log(db)

    return (
        <>
            <Typography variant="h4">Q/A COUNT: {count} </Typography>
            <TextField
                label="Title"
                // color="secondary"
                focused
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Stack container spacing={4}>
                <TextField
                    label="Question"
                    // color="secondary"
                    focused
                    value={qns}
                    onChange={(e) => setQns(e.target.value)}
                />
                <TextField
                    label="Answer"
                    // color="secondary"
                    focused
                    value={ans}
                    onChange={(e) => setAns(e.target.value)}
                />
                <Button variant="contained" onClick={handleNext}>
                    Add next QA
                </Button>
            </Stack>
        </>
    )
}

const AskQuestion = ({ title }) => (
    <Grid container direction="column" alignItems="center">
        <Grid item>
            <AudioRecorder title={title} />
        </Grid>
    </Grid>
)

export default function MainApp() {
    const [activeStep, setActiveStep] = useState(0)

    const [title, setTitle] = useState('')
    const [db, setDb] = useState([])
    console.log({ db })

    return (
        <Container maxWidth="md">
            <h1>Infox</h1>
            <Stack sx={{ width: '100%' }} spacing={8}>
                <Stepper
                    alternativeLabel
                    activeStep={activeStep}
                    connector={<ColorlibConnector />}
                >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep ? (
                    <AskQuestion title={title} />
                ) : (
                    <AddQuestion
                        db={db}
                        setDb={setDb}
                        title={title}
                        setTitle={setTitle}
                    />
                )}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        variant="contained"
                        onClick={() => setActiveStep(0)}
                    >
                        Previous
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button
                        variant="contained"
                        onClick={() => {
                            let qa = {}
                            db.forEach((item) => {
                                qa[item.question] = item.answer
                            })
                            toast.promise(
                                (async () => {
                                    await fetch(
                                        'http://localhost:5000/api/createEmbeddings/',
                                        {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type':
                                                    'application/json',
                                            },
                                            body: JSON.stringify({
                                                qa_name: title,
                                                QA: qa,
                                            }),
                                        }
                                    )
                                    setActiveStep(1)
                                })(),
                                {
                                    loading: 'Creating Embeddings...',
                                    success: <b>Embeddings created.</b>,
                                    error: <b>Could not create Embeddings.</b>,
                                }
                            )
                            // fetch(
                            //     'http://localhost:5000/api/createEmbeddings/',
                            //     {}
                            // )
                            //     .then((res) => {})
                            //     .catch((err) => {
                            //         console.log(err)
                            //     })
                        }}
                    >
                        Next
                    </Button>
                </Box>
                <QaTable rows={db} />
            </Stack>
        </Container>
    )
}
