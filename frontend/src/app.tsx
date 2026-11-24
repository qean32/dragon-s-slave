import ReactDOM from 'react-dom/client'
import { Router } from './router'
import { Root } from '@/component/core/root'
import "@/style/app.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Root>
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
