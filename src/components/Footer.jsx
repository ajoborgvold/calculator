const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <p>{year} &#169; Ajo Borgvold</p>
    </footer>
  )
}

export default Footer
