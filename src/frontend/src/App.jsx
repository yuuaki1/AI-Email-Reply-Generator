import './App.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')
  const [tone, setTone] = useState('')
  const [res, setRes] = useState('')

  const handleCopy = () => {
    navigator.clipboard.writeText(res);
  };

  const sendMessage = async (e) => {
    const formData = new FormData()
    formData.append('message', message)
    if (tone) formData.append('tone', tone)

    try {
      const res = await axios.post('http://localhost:8080/reply', formData, 
        {
          headers: {"Content-Type": "application/json"}
        }
      )
      const cleanRes = String(res.data).replace(/<think>.*?<\/think>/gs, "").trim()
     
      setRes(cleanRes)
    } catch (error) {
      console.log(error.response?.data || error.message)
    }
  }

  return (
    <div className='items-center flex flex-col'>
     <h1 className='text-4xl mt-10'>Email Reply Generator</h1>
     <Box
        component = "form"
        autoComplete='off'

        className='mt-10'
      >
        <div className='flex flex-col gap-y-6 mb-10'>
          <TextField
            required
            className='w-[800px]'
            multiline
            rows={8}
            id = "Original Email Content"
            label = "Original Email Content"
            onChange={(e) => setMessage(e.target.value)}
          />
          <TextField
            className=''
            id = "Tone"
            label = "Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
          />
        </div>
        </Box>
        <Button
            variant = "contained"
            color = "primary"
            disabled = {!message.trim()}
            className='my-6 w-[800px]'
            onClick={sendMessage}
        >
          Generate Reply
        </Button>

        {res && (
        <Box
        component = "form"
        autoComplete='off'
        className='mt-10 flex flex-col gap-y-6'
        >
          <TextField
          id = "message"
          label = "Reply"
          value = {res}
          multiline
          className='w-[800px] mt-10'
        />
        <Button
            variant="contained"
            color="primary"
            onClick={handleCopy}
            sx={{ mt: 2 }}
          >Copy To Clipboard</Button>
        </Box>
        )}
    </div>
  )
}

export default App
