const AccountWidgetPlaceholder = () => {
  return (
    <div role="status" className='AccountWidget'>
      <div className="AccountWidget-ownerinfo placeholder-glow">
        <div className="userpicture"></div>
        <div className='ownerinfo-names placeholder-container'>
          <p className='ownerinfo-username placeholder' data-testid='username'></p>
          <p className='ownerinfo-fullname placeholder'></p>
        </div>
      </div>
      <button className='btn-changeaccount' role='button'>Cambiar</button>
    </div>
  )
}

export default AccountWidgetPlaceholder
