import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"

type UseForm = {
  file: FileList
}

const FileUploadForm = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<UseForm>()

  const onSubmit: SubmitHandler<UseForm> = async (data: any) => {
    toast.success('Successfully clicked!')
    console.log("FILE FROM INPUT: ", data.file[0])
    // await axios.post('http://localhost:4000/main/pic', data, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
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
