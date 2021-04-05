import { Signale } from 'signale';

export function getLogger({ stdout, stderr }) {
    return new Signale({
        stream: stdout,
        scope: 'soona',
        types: {
            error: { badge: '[x]', color: 'red', label: '', stream: [stderr] },
            log: { badge: '[i]', color: 'magenta', label: '', stream: [stdout] },
            success: { badge: '+', color: 'green', label: '', stream: [stdout] },
        }
    })
}