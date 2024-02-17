// collect all other props and merge then in the props object
// extra props set in the section content
export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>
            <title>{title}</title>
            {children}
        </section>
    );
}