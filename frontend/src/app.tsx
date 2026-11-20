import ReactDOM from 'react-dom/client'
import { Router } from './router'
import { MainLoader } from '@/component/widget'
import { Root } from '@/component/core/root'
import "@/style/app.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Root>
        <MainLoader />
        <Router />
    </Root>
)


/**
 * push this in React -> declare namespace React
 * interface HTMLAttributes<T> extends DOMAttributes<T> {
 *   data?: string;
 *   value?: string;
 * }
*/
