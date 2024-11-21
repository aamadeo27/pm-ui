export default function FormError({ message }: { message: string }) {
  return (
    <div className="text-red-400 font-medium w-full text-center">{message}</div>
  );
}
