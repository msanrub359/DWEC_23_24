 export  const mensaje= (texto, icono)=>{
     Swal.fire({
      position: 'bottom-end',
      icon:icono,
      title: texto,
      showConfirmButton: false,
      timer: 1000
      
    })
  }