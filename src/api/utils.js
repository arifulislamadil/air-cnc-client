// upload image in IMGBB


export const imageUpload = async image =>{
    const formDate = new FormData()
    formDate.append("image", image)
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    const response = await fetch(url,{
        method: 'POST',
        body: formDate,
    })
    const data = await response.json();
    return data
}



