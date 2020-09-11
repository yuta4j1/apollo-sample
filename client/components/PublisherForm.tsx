import React, { useState } from "react"
import styled from "styled-components"

type Props = {
  onSubmit: (name: string, address: string, capital: number) => void
}

const PublisherForm: React.FC<Props> = props => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [capital, setCapital] = useState(0)

  const clearForm = () => {
    setName("")
    setAddress("")
    setCapital(0)
  }
  return (
    <div>
      <div>
        <p>出版社名</p>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
      </div>
      <div>
        <p>所在地</p>
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.currentTarget.value)}
        />
      </div>
      <div>
        <p>資本金</p>
        <input
          type="text"
          value={capital}
          onChange={e => setCapital(Number(e.currentTarget.value))}
        />
      </div>
      <div>
        <button
          onClick={e => {
            props.onSubmit(name, address, capital)
            clearForm()
          }}
        >
          {"登録"}
        </button>
      </div>
    </div>
  )
}

export default PublisherForm
