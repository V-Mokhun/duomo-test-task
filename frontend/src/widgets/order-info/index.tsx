export const OrderInfo = () => {
  return (
    <div className="bg-background-secondary p-3 pt-4 lg:p-8 rounded-lg">
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-lg font-semibold">Order info &lt;= 100 char.</h2>

        <div className="space-y-4">
          <p className="font-medium text-sm">Description &lt;= 400 char.</p>

          <div className="border-t border-b border-border py-4">
            <div className="space-y-1">
              <h3 className="font-medium text-sm">
                Lamel Professional Smart Skin Compact Powder
              </h3>
              <p className="text-muted-foreground text-xs">Пудра для обличчя</p>
            </div>
          </div>

          <div className="text-right font-medium xs:hidden">
            <span className="text-sm hidden lg:inline">Total </span>
            <span className="font-semibold">299.99 UAH</span>
            <span className="xs:hidden">/&nbsp;month</span>
          </div>

          <div className="hidden xs:block text-right">
            <p className="font-semibold">5 days free</p>
            <p className="text-sm">then 299.99 UAH per 14 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};
