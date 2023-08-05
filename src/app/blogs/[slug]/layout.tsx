interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <>
      <div className="prose prose-slate">{props.children}</div>
    </>
  );
}
