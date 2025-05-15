import { useState } from 'react'
import { mockCustomers } from '../testdate/mockData'
import { Box, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';


const CustomerList = () => {
  const [customers] = useState(mockCustomers)

  // 並べ替え
  const [sortKey, setSortKey] = useState<'id' | 'name' | 'createdAt'>('id')
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
        : b.name.localeCompare(a.name)
    } else if (sortKey === 'createdAt') {
      return sortOrder === 'asc'
        ? a.createdAt.getTime() - b.createdAt.getTime()
        : b.createdAt.getTime() - a.createdAt.getTime()
    } else {
      return sortOrder === 'asc'
        ? a.id - b.id
        : b.id - a.id
    }
  })

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>顧客一覧</Typography>

      <Box display="flex" justifyContent="space-between" mb={2}>
        <TextField
          label="名前・メール・電話番号で検索"
          variant="outlined"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          fullWidth
        />
      </Box>

      <Box mb={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => { setSortKey('name'); setSortOrder('asc'); }}
          sx={{ mr: 1 }}
        >
          名前（昇順）
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => { setSortKey('name'); setSortOrder('desc'); }}
          sx={{ mr: 1 }}
        >
          名前（降順）
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => { setSortKey('createdAt'); setSortOrder('asc'); }}
          sx={{ mr: 1 }}
        >
          登録日（昇順）
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => { setSortKey('createdAt'); setSortOrder('desc'); }}
        >
          登録日（降順）
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ユーザーID</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>メールアドレス</TableCell>
              <TableCell>電話番号</TableCell>
              <TableCell>登録日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.createdAt.toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerList;