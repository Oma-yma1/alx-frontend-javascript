export default function guardrail(mathFunction) {
  const que = [];
  try {
    const value = mathFunction();
    que.push(value);
  } catch (error) {
    que.push(`Error: ${error.message}`);
  } finally {
    que.push('Guardrail was processed');
  }
  return que;
}
