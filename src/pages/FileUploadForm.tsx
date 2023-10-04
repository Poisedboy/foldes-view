import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import axios, { AxiosResponse } from 'axios'

type UseForm = {
  file: FileList
}

const FileUploadForm = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<UseForm>()

  const onSubmit: SubmitHandler<UseForm> = async (data: any) => {
    console.log("FILE FROM INPUT: ", data)

    const formData = new FormData()
    formData.append('picture', data.file[0])
    try {
      const response: AxiosResponse<any> = await axios.post('http://localhost:4000/main/pic', {
        file: data.file[0],
        msg: 'hello from Frontend!'
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response)
      // const parsedResponse = await response.json()
      if(response?.status=== 200) {
        toast.success('Successfully uploaded!')
      } else if (response?.status > 300) {
        toast.error('Response failed!')
      }
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  return (
    <>
      <h3>Upload picture</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <div>
            <label htmlFor="file">Choose a file:</label>
            <input
            type="file"
            id="file"
            {...register('file', { required: 'Please select a file' })}
            />
            {errors.file && <p>{errors.file.message}</p>}
        </div>
        <input type='submit' />
      </form>
    </>
  )
}

export default FileUploadForm
