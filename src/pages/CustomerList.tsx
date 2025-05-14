import { useState } from 'react'
import { mockCustomers } from '../testdate/mockData'

const CustomerList = () => {
  const [customers] = useState(mockCustomers)
  const [searchKeyword, setSearchKeyword] = useState('')

  const filteredCustomers = customers.filter((customer) => {
    const keyword = searchKeyword.toLowerCase()
    return (
      customer.name.toLowerCase().includes(keyword) ||
      customer.email.toLowerCase().includes(keyword) ||
      customer.phone.toLowerCase().includes(keyword)
    )
  })

  return (
    <div>
      <h2>顧客一覧</h2>

      <input
        type="text"
        placeholder="名前で検索"
        value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ユーザーID</th>
            <th>名前</th>
            <th>メールアドレス</th>
            <th>電話番号</th>
            <th>登録日</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerList
