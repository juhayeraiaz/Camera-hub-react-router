import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';
import data from '../../data.json'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <h1 className='mt-5 mb-3 fs-1 fw-bold' style={{ color: "#3944F7" }}>DASHBOARD</h1>
            <div className='d-block mt-5 d-md-flex justify-content-center'>
                <div>
                    <h3 className='mb-4'>Composed Chart</h3>
                    <ComposedChart width={630} height={250} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    </ComposedChart>
                </div>
                <div>
                    <h3 className='mb-4'>Bar Chart</h3>
                    <BarChart width={630} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#EDBF69" />
                        <Bar dataKey="sell" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
            <div className='mb-5'>
                <h3 className='mb-4 mt-5 text-center'>Radar Chart</h3>
                <div className='radar-chart' >
                    <RadarChart outerRadius={150} width={780} height={380} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Tooltip />
                        <Radar name="Investment" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="Revenue" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;