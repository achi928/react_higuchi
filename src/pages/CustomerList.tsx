import { useState } from 'react'
import { mockCustomers } from '../testdate/mockData'

const CustomerList = () => {
  const [customers] = useState(mockCustomers)

  // 並べ替え
  const [sortKey, setSortKey] = useState<'name' | 'createdAt'>('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  // 検索
  const [searchKeyword, setSearchKeyword] = useState('')

  const sortedCustomers = customers
  .filter((customer) => {
    const keyword = searchKeyword.toLowerCase();
    return (
      customer.name.toLowerCase().includes(keyword) ||
      customer.email.toLowerCase().includes(keyword) ||
      customer.phone.toLowerCase().includes(keyword)
    );
  })
  .sort((a, b) => {
    if (sortKey === 'name') {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      return sortOrder === 'asc'
        ? a.createdAt.getTime() - b.createdAt.getTime()
        : b.createdAt.getTime() - a.createdAt.getTime();
    }
  });


  return (
    <div>
      <h2>顧客一覧</h2>

      <div>
        <input
          type="text"
          placeholder="名前・メール・電話番号で検索"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => { setSortKey('name'); setSortOrder('asc') }}>
          名前（昇順）
        </button>
        <button onClick={() => { setSortKey('name'); setSortOrder('desc') }}>
          名前（降順）
        </button>
        <button onClick={() => { setSortKey('createdAt'); setSortOrder('asc') }}>
          登録日（昇順）
        </button>
        <button onClick={() => { setSortKey('createdAt'); setSortOrder('desc') }}>
          登録日（降順）
        </button>
      </div>

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
          {sortedCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.createdAt.toLocaleDateString()}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerList
