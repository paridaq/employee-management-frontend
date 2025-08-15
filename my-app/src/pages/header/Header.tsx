 function Header(){
     return(
        <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#1976d2', color: '#fff' }}>
            <h2 style={{ margin: 0 }}>Employee Management System</h2>
            <nav>
                <a href="/employees" style={{ color: '#fff', marginRight: '24px', textDecoration: 'none', fontWeight: 'bold' }}>Employees</a>
                <a href="/post-employee" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Post Employee</a>
            </nav>
            <p>it is working</p>
        </div>
        </>
     )
 }
 export default Header;